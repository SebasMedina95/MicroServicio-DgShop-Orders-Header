import { Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';

import { PageOptionsDto } from '../../helpers/paginations/dto/page-options.dto';
import { CustomError } from '../../helpers/errors/custom.error';
import { EResponseCodes } from '../../constants/ResponseCodesEnum';
import { ApiTransactionResponse } from '../../utils/ApiResponse';

import { IOrders } from './interfaces/orders.interface';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

  async create(createOrderDto: CreateOrderDto): Promise<ApiTransactionResponse<IOrders | CustomError>> {

    return new ApiTransactionResponse(
      createOrderDto,
      EResponseCodes.INFO,
      "Test pasando la información del DTO."
    );
    
  }

  async findAll(pageOptionsDto: PageOptionsDto) {

    return `This action returns all orders`;

  }

  async findOne(id: number) {

    return `This action returns a #${id} order`;

  }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }

}
