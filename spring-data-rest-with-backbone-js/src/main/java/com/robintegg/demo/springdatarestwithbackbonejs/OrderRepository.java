package com.robintegg.demo.springdatarestwithbackbonejs;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface OrderRepository extends PagingAndSortingRepository<Order,Long> {


    
}
