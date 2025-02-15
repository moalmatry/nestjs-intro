import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller("users")
export class UsersController {
  @Get("/:id")
  getUsers(
    @Param("id", ParseIntPipe) id: string | undefined,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query("page", new DefaultValuePipe(10)) page: number,
  ) {
    console.log(typeof limit);
    console.log(typeof limit);
    return "You Send requests to the end point";
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    // console.log('--------------------------------');
    // console.log(typeof createUserDto);
    // console.log('--------------------------------');
    return "You Send Post Request Create a new user";
  }
}
