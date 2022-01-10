import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './task.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

// First to create a new module, use 'nest g mo [nameOfModule]' with Nest CLI to generate module
@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  // Second step to generate a controller is to use 'nest g co [nameOfController]' to generate a Controller.
  // NOTE: Important to use the same name for the module, controller and service when generating all three files.
  controllers: [TasksController],
  // Third step is to generate a service to be used by the controller.
  // To do this, use 'nest g s [nameOfService]' in the Nest cli to generate the provided files for the controller.
  providers: [TasksService],
})
export class TasksModule {}
