"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const cors = configService.get('CORS') === 'true';
    if (cors) {
        app.enableCors();
    }
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Microservice request')
        .setDescription('Swagger for ms-vcp-request API')
        .setVersion('1.0')
        .addTag('providers')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(configService.get('PORT'));
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map