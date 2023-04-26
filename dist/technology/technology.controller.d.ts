import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
export declare class TechnologyController {
    private readonly technologyService;
    constructor(technologyService: TechnologyService);
    create(data: CreateTechnologyDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<import(".prisma/client").Technology[]>;
    findOne(id: number): Promise<import(".prisma/client").Technology>;
    update(id: number, updateTechnologyDto: UpdateTechnologyDto): Promise<string>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
