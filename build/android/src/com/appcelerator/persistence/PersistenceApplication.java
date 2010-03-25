package com.appcelerator.persistence;

import org.appcelerator.titanium.TiApplication;

public class PersistenceApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new PersistenceAppInfo(this);
	}
}
