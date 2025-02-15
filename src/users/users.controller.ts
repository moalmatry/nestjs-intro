import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  getUsers(
    @Param('id', ParseIntPipe) id: string | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(10)) page: number,
  ) {
    console.log(typeof limit);
    console.log(typeof limit);
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
