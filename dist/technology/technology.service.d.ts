import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
export declare class TechnologyService {
    store(createTechnologyDto: CreateTechnologyDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<import(".prisma/client").Technology[]>;
    findOneTechnology(id: number): Promise<import(".prisma/client").Technology>;
    update(id: number, updateTechnologyDto: UpdateTechnologyDto): Promise<string>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
