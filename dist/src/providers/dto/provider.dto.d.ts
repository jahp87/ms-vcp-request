export declare class ProviderDto {
    id?: number;
    company: string;
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
}
declare const UpdateProviderDto_base: import("@nestjs/common").Type<Omit<ProviderDto, "id">>;
export declare class UpdateProviderDto extends UpdateProviderDto_base {
}
export {};
