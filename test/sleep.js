function sleep(ms){
			var now=new Date();
			var exitTime=now.getTime()+ms;
			while(true){
				now=new Date();
				if(now.getTime()>exitTime)
					return;
			}
		}