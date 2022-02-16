package com.example.Project1.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.Project1.Dao.GenericDao;
import com.example.Project1.entity.Table1;
import com.example.Project1.services.TableService;


@Component
public class TableServiceImpl implements TableService {
 
	private List<Table1> list;
  
	
	@Autowired
  public GenericDao genericDao;
  
	public TableServiceImpl() {
	
	list=new ArrayList<>();
	//list.add(new Table(1, "priya", 2,"2022-28-01" ,"14:27","12345671"));
}

	@Override
	public List<Table1> getTables() {

//		genericDao.fetchTables();
		
		return list;
	}

	@Transactional
	public Table1 addTable(Table1 table) {
		
	genericDao.add(table);
	return table;
	}
	
	@javax.transaction.Transactional
	public String datadelt(long id)
	{
		genericDao.deleteData(Table1.class,id);
		return "Data deleted";
	}
}
