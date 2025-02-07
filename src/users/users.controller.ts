import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  Ip,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);

    console.log(limit);
    return 'You Send requests to the end point';
  }

  @Post()
  createUser(@Body() request: any, @Headers() header: any, @Ip() ip: any) {
    console.log(request);
    console.log(header);
    console.log(ip);
    return 'You Send Post Request Create a new user';
  }
}
