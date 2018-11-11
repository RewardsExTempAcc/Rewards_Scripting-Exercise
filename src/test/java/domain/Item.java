package domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true) //will ignore all the unknown properties
public class Item {
	
	private int id;
	private String name;
	private String full_name;
	private Owner owner;
	
}
