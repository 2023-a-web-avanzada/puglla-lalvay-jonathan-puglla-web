import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, FindManyOptions} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public usuarioRepository = this.datasource.getRepository(
        UsuarioEntity
    );
    find(
        opciones: FindManyOptions<UsuarioEntity>
    ): Promise<UsuarioEntity[]> {
        return this.usuarioRepository.find(opciones)
    }
    findOneById(id: number): Promise<UsuarioEntity> {
        return this.usuarioRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }



    create(
        datosCrear: UsuarioCreateDto
    ): Promise<(DeepPartial<UsuarioEntity> & UsuarioEntity)> {
        return this.usuarioRepository.save(datosCrear);
    }

    update(
        datosActualizar: UsuarioUpdateDto,
        id: number
    ): Promise<(DeepPartial<UsuarioEntity> & UsuarioEntity)> {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number): Promise<DeleteResult> {
        return this.usuarioRepository.delete(id);
    }


}