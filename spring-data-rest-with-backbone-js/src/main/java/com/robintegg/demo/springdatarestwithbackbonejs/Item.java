package com.robintegg.demo.springdatarestwithbackbonejs;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
public class Item {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne
    @Setter
    private Order order;

}
