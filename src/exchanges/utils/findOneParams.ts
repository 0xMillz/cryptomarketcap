import { IsString } from 'class-validator';

class FindOneParams {
    @IsString()
    slug: string;
}

export default FindOneParams;
