package com.robintegg.demo.springdatarestwithbackbonejs;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface ItemRepository extends PagingAndSortingRepository<Item,Long> {
    
}
