import {Point} from "./Point";

type Line = {
    prevPoint: Point | null
    currentPoint: Point
    color: string
}

export {
    Line as DrawLine
}