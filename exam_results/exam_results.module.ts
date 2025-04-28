import { Module } from '@nestjs/common';
import { ExamResultsService } from './exam_results.service';
import { ExamResultsController } from './exam_results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamResult } from './entities/exam_result.entity';
import { ProgressModule } from 'src/progress/progress.module';

@Module({
  imports: [TypeOrmModule.forFeature([ExamResult]), ProgressModule],
  controllers: [ExamResultsController],
  providers: [ExamResultsService],
  exports: [ExamResultsService],
})
export class ExamResultsModule {}
