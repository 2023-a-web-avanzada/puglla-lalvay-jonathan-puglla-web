'use client'

import React, {useEffect, useState } from 'react'
import { useDraw } from '@/hooks/useDraw'
import { ChromePicker } from 'react-color'
import { io } from 'socket.io-client'
import { drawLine } from '@/utils/drawLine'
import Header from "@/app/components/template/Header";
import Button from "@/app/components/template/Button";

const socket = io('http://localhost:3001');

interface pageProps {}

type DrawLineProps = {
  prevPoint: Point | null;
  currentPoint: Point;
  color: string;
}

const page: React.FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>('#000');
  const { canvasRef, onMouseDown, clear } = useDraw(createLine);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    socket.emit('client-ready');

    socket.on('get-canvas-state', () => {
      if (!canvasRef.current?.toDataURL()) return
      console.log('Sending canvas state');
      socket.emit('canvas-state', canvasRef.current.toDataURL());
    })

    socket.on('canvas-state-from-server', (state: string) => {
      console.log('I received the state');
      const img = new Image()
      img.src = state
      img.onload = () => {
        ctx?.drawImage(img, 0, 0)
      }
    })

    socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLineProps) => {
      if (!ctx) return console.log('no ctx here');
      drawLine({ prevPoint, currentPoint, ctx, color });
    })

    socket.on('clear', clear)

    return () => {
      socket.off('draw-line');
      socket.off('get-canvas-state');
      socket.off('canvas-state-from-server');
      socket.off('clear');
    }
  }, [canvasRef])

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    socket.emit('draw-line', { prevPoint, currentPoint, color });
    drawLine({ prevPoint, currentPoint, ctx, color });
  }

  return (
      <>
        <Header/>

        <div className="relative h-30 w-120">
          <div className="absolute z-40 right-0">
            <Button socket={socket}/>
          </div>
        </div>

        <div className="pt-36 grid place-items-center pl-10 pb-0 mb-0">
          <div className='relative bg-white flex justify-center items-center'>
            <div className='flex flex-col gap-10 pr-10'>
              <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
            </div>
          </div>
        </div>

        <div className="grid place-items-center h-screen pt-0 mt-0">
          <canvas
              ref={canvasRef}
              onMouseDown={onMouseDown}
              width={600}
              height={650}
              className='border border-black rounded-md'
          />
        </div>
      </>
  )
}

export default page
