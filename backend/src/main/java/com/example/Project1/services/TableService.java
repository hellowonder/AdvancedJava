package com.example.Project1.services;

import java.util.List;

import com.example.Project1.entity.Table1;

public interface TableService {
	public List<Table1> getTables();	
	public Table1 addTable(Table1 table);
	public String datadelt(long id);

}
