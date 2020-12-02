import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    if (!value) {
      throw new BadRequestException(`Required parameter is missing`);
    }
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`Status: "${value}" is not valid`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatuses.indexOf(status) !== -1;
  }
}
