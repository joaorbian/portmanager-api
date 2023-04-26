import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageService {
    create(data: any): Promise<import(".prisma/client").Language | {
        message: string;
    }>;
    findAll(): Promise<import(".prisma/client").Language[]>;
    findOne(id: number): string;
    update(id: number, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: number): string;
}
