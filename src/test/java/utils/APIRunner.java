package utils;

import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import domain.MyResponse;
import domain.RepositoryContainer;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class APIRunner {
	private static MyResponse resp;
	private static ObjectMapper mapper = new ObjectMapper();
	private static int statusCode;
	
	public static void runGetRequest(String uri) {
		Response mr = RestAssured.get(uri);
		statusCode = mr.getStatusCode();
		
		try {
			resp = mapper.readValue(mr.asString(), MyResponse.class);
		} catch (Exception e) {
			System.out.println("Json could not map into Myresponse object");
			e.printStackTrace();
		} 
	}
	
	public static void runGetRequest(String uri, List<RepositoryContainer> entry) {
		String param = "";
		
		for(RepositoryContainer rc : entry) {
			switch(rc.getParameter().toLowerCase()) {
			
			case "search":
				param += "q" + "=" + rc.getQualifier() +":" + rc.getValue() + "&";
				break;
			default:
				param += rc.getParameter().toLowerCase() + "=" + rc.getValue() + "&";
				break;
			}
		}
		
		
		String u = uri + "?" + param;
		String url = u.substring(0,u.length()-1);
		System.out.println(url);
		runGetRequest(url);
		
	}
	
//	public static void runPostRequest(String uri, MyRequest body) {
//		String json = "";
//		try {
//			 json = mapper.writeValueAsString(body);
//		} catch (JsonProcessingException e) {
//			System.out.println("Couldn't convert from POJO to Json");
//			e.printStackTrace();
//		}
//		
//		Response mr = RestAssured.given().contentType(ContentType.JSON).body(json).post(uri);
//		statusCode = mr.getStatusCode();
//		try {
//			resp = mapper.readValue(mr.asString(), MyResponse.class);
//		} catch (Exception e) {
//			System.out.println("Json could not map into Myresponse object");
//			e.printStackTrace();
//		} 
//	}
	

	
	public static MyResponse getResponse() {
		return resp;
	}
	
	public static int getStatusCode() {
		return statusCode;
		
	}

}
