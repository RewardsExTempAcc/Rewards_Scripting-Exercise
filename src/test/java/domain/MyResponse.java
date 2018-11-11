package domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true) //will ignore all the unknown properties
public class MyResponse {
	
	
	private int total_count;
	private boolean incomplete_results;
	private List<Item> items;
	
	

}
