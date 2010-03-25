package com.appcelerator.persistence;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public class PersistenceAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public PersistenceAppInfo(TiApplication app) {
		TiProperties properties = app.getAppProperties();
					
		properties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "com.appcelerator.persistence";
	}
	
	public String getName() {
		return "Persistence";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "not specified";
	}
	
	public String getUrl() {
		return "not specified";
	}
	
	public String getCopyright() {
		return "not specified";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "ef78a2da-817a-47ba-8b32-3a21a3745224";
	}
}
