import { Controller, NotImplementedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

import { PageOptionsDto } from '../../helpers/paginations/dto/page-options.dto';
import { CustomError } from '../../helpers/errors/custom.error';

import { ApiTransactionResponse } from '../../utils/ApiResponse';
import { IOrders } from './interfaces/orders.interface';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'create_order_header'})
  async create(
    @Payload() createOrderDto: CreateOrderDto
  ): Promise<ApiTransactionResponse<IOrders | CustomError>> {

    return this.ordersService.create(createOrderDto);

  }

  @MessagePattern({ cmd: 'get_orders_headers_paginated'})
  async findAll(
    @Payload() pageOptionsDto: PageOptionsDto
  ) {

    return this.ordersService.findAll(pageOptionsDto);

  }

  @MessagePattern({ cmd: 'get_order_header_by_id' })
  async findOne(
    @Payload('id') id: number
  ) {

    return this.ordersService.findOne(id);

  }

  @MessagePattern({ cmd: 'change_order_header_status' })
  async changedOrderStatus(){

    throw new NotImplementedException();
    
  }

  // @MessagePattern({ cmd: 'update_order_header' })
  // update(@Payload() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(updateOrderDto.id, updateOrderDto);
  // }

  // @MessagePattern({ cmd: 'remove_logic_order_header' })
  // remove(@Payload() id: number) {
  //   return this.ordersService.remove(id);
  // }

}
