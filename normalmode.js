var x,o=0,u,s=[],p=0,s1=[],s2=[],m=1; 
			var c = document.getElementById("game");
			var gx = c.getContext("2d");
			gx.fillStyle = "red";
			gx.strokeStyle = "blue";
			function disp1(){
					x+=1;
					collide();
					if(x-u == 10 || x==0 || y==0||crash||x==570||y==570){
						clearInterval(b);
						x-=1;
						return;
					}
					gx.clearRect(0, 0, c.width, c.height);
					disp();
					temp();
					o=1;
				}
				function disp2(){									x-=1;
					collide();
					if(x-u == -10 || x==0 || y==0||crash||x==570||y==570){
						clearInterval(b);
						x+=1;
						return;
					}
					gx.clearRect(0, 0, c.width, c.height);
					disp();
					temp();
					o=1;
				}
				function disp3(){
					y-=1;
					collide();
					if(y-u == -10 || x==0 || y==0||crash||x==570||y==570){
						clearInterval(b);
						y+=1;
						return;
					}
					gx.clearRect(0, 0, c.width, c.height);
					temp();
					disp();
					o=1;
				}
				function disp4(){
					y+=1;
					collide();
					if(y-u == 10 || x==0 || y==0||crash||x==570||y==570){
						clearInterval(b);
						y-=1;
						return;
					}
					gx.clearRect(0, 0, c.width, c.height);
					temp();
					disp();
					o=1;
				}
				document.onkeydown = function(v){
					if(p){
				if(v.keyCode == 39 && !o){
					u=x;
					b = setInterval(disp1, 10);
				}
				else if(v.keyCode == 37 && !o)
				{
					u=x;
					b = setInterval(disp2, 10);
				}
				else if(v.keyCode == 38 && !o){
					u=y;
					b = setInterval(disp3, 10);
				}
				else if(v.keyCode == 40 && !o){
					u=y;
					b = setInterval(disp4, 10);
				}
				o=0;
			}
			}
			function temp(){
				gx.fillStyle = "red";
				gx.fillRect(x, y, 25, 25);
			}
			function coordinates(x1, y1, x2, y2){
				this.x1=x1;
				this.y1=y1;
				this.x2=x2;
				this.y2=y2;
				gx.beginPath();
				gx.moveTo(x1, y1);
				gx.lineTo(x2, y2);
				gx.stroke();
			}
			// Generating random maze
			/*function maze(){
				var i,j,gap=[];
				for(i=60; i<=600; i+=60){
					for(j=60; j<=600; j+=60){
					if(Math.floor(Math.random()*3)){
					gx.beginPath();
					gx.moveTo(i, j-60);
					gx.lineTo(i, j);
					gx.stroke();
					s.push(new coordinates(i, j-60, i, j));
				}
				else{
					gap.push(new coordinates(i, j-60, i, j));
				}
				}
				}
				var k=0;
				for(var i=60; i<=600; i+=60){
					for(j=60; j<=600; j+=60){
						if(i==gap[k].x1 && (j-60)==gap[k].y1){
					gx.beginPath();
					gx.moveTo(j-60, i);
					gx.lineTo(j, i);
					gx.stroke();
					s.push(new coordinates(j-60, i, j, i));
					k++;
				}
				}
				}
			}*/
			//Level-1
			function maze1(){
				x=16;
				y=263;
				gx.fillRect(x, y, 25, 25);
				//Column Design
				s.push(new coordinates(8, 8, 8, 227));
				s.push(new coordinates(8, 300, 8, 592));
				s.push(new coordinates(592, 8, 592, 519));
				s.push(new coordinates(81, 81, 81, 154));
				s.push(new coordinates(81, 227, 81, 300));
				s.push(new coordinates(81, 300, 81, 373));
				s.push(new coordinates(154, 154, 154, 227));
				s.push(new coordinates(154, 373, 154, 446));
				s.push(new coordinates(227, 81, 227, 227));
				s.push(new coordinates(227, 373, 227, 519));
				s.push(new coordinates(300, 300, 300, 446));
				s.push(new coordinates(373, 81, 373, 154));
				s.push(new coordinates(373, 227, 373, 519));
				s.push(new coordinates(446, 8, 446, 81));
				s.push(new coordinates(446, 300, 446, 446));
				s.push(new coordinates(519, 81, 519, 373));
				s.push(new coordinates(519, 446, 519, 592));

				//Row Design
				s.push(new coordinates(8, 8, 592, 8));
				s.push(new coordinates(8, 592, 592, 592));
				s.push(new coordinates(81, 81, 300,81));
				s.push(new coordinates(300, 154, 519, 154));
				s.push(new coordinates(8, 227, 154, 227));
				s.push(new coordinates(300, 227, 446, 227));
				s.push(new coordinates(81, 300, 300, 300));
				s.push(new coordinates(446, 300, 519, 300));
				s.push(new coordinates(154, 373, 227, 373));
				s.push(new coordinates(8, 446, 154, 446));
				s.push(new coordinates(300, 446, 373, 446));
				s.push(new coordinates(446, 446, 519, 446));
				s.push(new coordinates(81, 519, 300, 519));
				s.push(new coordinates(373, 519, 446, 519));
			}
			function maze2(){
				x=564;
				y=60;
				gx.fillRect(x, y, 25, 25);

				//Column Design
				s1.push(new coordinates(6, 6, 6, 594));
				s1.push(new coordinates(594, 6, 594, 55));
				s1.push(new coordinates(594, 104, 594, 545));
				s1.push(new coordinates(55, 55, 55, 545));
				s1.push(new coordinates(104, 6, 104, 104));
				s1.push(new coordinates(104, 153, 104, 349));
				s1.push(new coordinates(104, 447, 104, 594));
				s1.push(new coordinates(153, 104, 153, 349));
				s1.push(new coordinates(153, 398, 153, 545));
				s1.push(new coordinates(202, 55, 202, 153));
				s1.push(new coordinates(202, 251, 202, 545));
				s1.push(new coordinates(251, 153, 251, 300));
				s1.push(new coordinates(251, 398, 251, 545));
				s1.push(new coordinates(300, 55, 300, 349));
				s1.push(new coordinates(349, 104, 349, 202));
				s1.push(new coordinates(349, 251, 349, 349));
				s1.push(new coordinates(349, 496, 349, 545));
				s1.push(new coordinates(398, 6, 398, 104));
				s1.push(new coordinates(398, 153, 398, 202));
				s1.push(new coordinates(398, 300, 398, 398));
				s1.push(new coordinates(398, 447, 398, 545));
				s1.push(new coordinates(447, 55, 447, 153));
				s1.push(new coordinates(447, 202, 447, 251));
				s1.push(new coordinates(447, 300, 447, 349));
				s1.push(new coordinates(496, 55, 496, 104));
				s1.push(new coordinates(496, 251, 496, 300));
				s1.push(new coordinates(496, 398, 496, 447));
				s1.push(new coordinates(545, 349, 545, 447));
				s1.push(new coordinates(545, 545, 545, 594));

				//Row Design
				s1.push(new coordinates(6, 6, 594, 6));
				s1.push(new coordinates(6, 594, 594, 594));
				s1.push(new coordinates(153, 55, 251, 55));
				s1.push(new coordinates(300, 55, 349, 55));
				s1.push(new coordinates(496, 55, 545, 55));
				s1.push(new coordinates(104, 104, 153, 104));
				s1.push(new coordinates(251, 104, 300, 104));
				s1.push(new coordinates(349, 104, 398, 104));
				s1.push(new coordinates(496, 104, 594, 104));
				s1.push(new coordinates(55, 153, 104, 153));
				s1.push(new coordinates(202, 153, 251, 153));
				s1.push(new coordinates(398, 153, 545, 153));
				s1.push(new coordinates(153, 202, 251, 202));
				s1.push(new coordinates(349, 202, 398, 202));
				s1.push(new coordinates(447, 202, 545, 202));
				s1.push(new coordinates(349, 251, 496, 251));
				s1.push(new coordinates(545, 251, 594, 251));
				s1.push(new coordinates(398, 300, 447, 300));
				s1.push(new coordinates(496, 300, 594, 300));
				s1.push(new coordinates(202, 349, 349, 349));
				s1.push(new coordinates(447, 349, 545, 349));
				s1.push(new coordinates(55, 398, 153, 398));
				s1.push(new coordinates(251, 398, 447, 398));
				s1.push(new coordinates(300, 447, 545, 447));
				s1.push(new coordinates(300, 496, 349, 496));
				s1.push(new coordinates(447, 496, 594, 496));
				s1.push(new coordinates(153, 545, 202, 545));
				s1.push(new coordinates(251, 545, 349, 545));
				s1.push(new coordinates(398, 545, 545, 545));
			}
			function maze3(){
				x=15;
				y=55;
				gx.fillRect(x, y, 25, 25);

				//Column Design
				s2.push(new coordinates(15, 15, 15, 53));
				s2.push(new coordinates(15, 91, 15, 585));
				s2.push(new coordinates(585, 15, 585, 433));
				s2.push(new coordinates(585, 471, 585, 585));
				s2.push(new coordinates(53, 15, 53, 91));
				s2.push(new coordinates(53, 167, 53, 205));
				s2.push(new coordinates(53, 281, 53, 357));
				s2.push(new coordinates(53, 433, 53, 509));
				s2.push(new coordinates(91, 91, 91, 167));
				s2.push(new coordinates(91, 205, 91, 281));
				s2.push(new coordinates(91, 357, 91, 471));
				s2.push(new coordinates(129, 53, 129, 129));
				s2.push(new coordinates(129, 167, 129, 205));
				s2.push(new coordinates(129, 281, 129, 433));
				s2.push(new coordinates(129, 471, 129, 547));
				s2.push(new coordinates(167, 129, 167, 205));
				s2.push(new coordinates(167, 357, 167, 547));
				s2.push(new coordinates(205, 91, 205, 129));
				s2.push(new coordinates(205, 205, 205, 395));
				s2.push(new coordinates(205, 509, 205, 547));
				s2.push(new coordinates(243, 15, 243, 91));
				s2.push(new coordinates(243, 129, 243, 243));
				s2.push(new coordinates(243, 281, 243, 319));
				s2.push(new coordinates(243, 395, 243, 433));
				s2.push(new coordinates(243, 471, 243, 547));
				s2.push(new coordinates(281, 53, 281, 91));
				s2.push(new coordinates(281, 243, 281, 281));
				s2.push(new coordinates(281, 357, 281, 395));
				s2.push(new coordinates(281, 433, 281, 509));
				s2.push(new coordinates(319, 15, 319, 129));
				s2.push(new coordinates(319, 205, 319, 243));
				s2.push(new coordinates(319, 281, 319, 357));
				s2.push(new coordinates(319, 471, 319, 509));
				s2.push(new coordinates(357, 129, 357, 243));
				s2.push(new coordinates(357, 357, 357, 471));
				s2.push(new coordinates(357, 547, 357, 585));
				s2.push(new coordinates(395, 53, 395, 129));
				s2.push(new coordinates(395, 319, 395, 395));
				s2.push(new coordinates(395, 471, 395, 547));
				s2.push(new coordinates(433, 53, 433, 91));
				s2.push(new coordinates(433, 167, 433, 243));
				s2.push(new coordinates(433, 319, 433, 395));
				s2.push(new coordinates(433, 433, 433, 509));
				s2.push(new coordinates(471, 15, 471, 53));
				s2.push(new coordinates(471, 129, 471, 167));
				s2.push(new coordinates(471, 243, 471, 281));
				s2.push(new coordinates(471, 395, 471, 433));
				s2.push(new coordinates(471, 509, 471, 547));
				s2.push(new coordinates(509, 15, 509, 129));
				s2.push(new coordinates(509, 167, 509, 243));
				s2.push(new coordinates(509, 281, 509, 357));
				s2.push(new coordinates(509, 433, 509, 509));
				s2.push(new coordinates(509, 547, 509, 585));
				s2.push(new coordinates(547, 53, 547, 205));
				s2.push(new coordinates(547, 243, 547, 281));

				//Row Design
				s2.push(new coordinates(15, 15, 585, 15));
				s2.push(new coordinates(15, 585, 585, 585));
				s2.push(new coordinates(91, 53, 129, 53));
				s2.push(new coordinates(167, 53, 243, 53));
				s2.push(new coordinates(357, 53, 433, 53));
				s2.push(new coordinates(129, 91, 205, 91));
				s2.push(new coordinates(281, 91, 357, 91));
				s2.push(new coordinates(433, 91, 509, 91));
				s2.push(new coordinates(15, 129, 91, 129));
				s2.push(new coordinates(205, 129, 281, 129));
				s2.push(new coordinates(357, 129, 395, 129));
				s2.push(new coordinates(433, 129, 471, 129));
				s2.push(new coordinates(91, 167, 129, 167));
				s2.push(new coordinates(167, 167, 243, 167));
				s2.push(new coordinates(281, 167, 357, 167));
				s2.push(new coordinates(395, 167, 471, 167));
				s2.push(new coordinates(509, 167, 547, 167));
				s2.push(new coordinates(53, 205, 91, 205));
				s2.push(new coordinates(129, 205, 167, 205));
				s2.push(new coordinates(281, 205, 319, 205));
				s2.push(new coordinates(357, 205, 395, 205));
				s2.push(new coordinates(471, 205, 509, 205));
				s2.push(new coordinates(15, 243, 53, 243));
				s2.push(new coordinates(91, 243, 167, 243));
				s2.push(new coordinates(205, 243, 319, 243));
				s2.push(new coordinates(357, 243, 471, 243));
				s2.push(new coordinates(509, 243, 585, 243));
				s2.push(new coordinates(53, 281, 91, 281));
				s2.push(new coordinates(129, 281, 167, 281));
				s2.push(new coordinates(319, 281, 509, 281));
				s2.push(new coordinates(91, 319, 205, 319));
				s2.push(new coordinates(243, 319, 319, 319));
				s2.push(new coordinates(357, 319, 471, 319));
				s2.push(new coordinates(547, 319, 585, 319));
				s2.push(new coordinates(53, 357, 91, 357));
				s2.push(new coordinates(205, 357, 281, 357));
				s2.push(new coordinates(319, 357, 357, 357));
				s2.push(new coordinates(471, 357, 547, 357));
				s2.push(new coordinates(15, 395, 53, 395));
				s2.push(new coordinates(281, 395, 319, 395));
				s2.push(new coordinates(433, 395, 509, 395));
				s2.push(new coordinates(547, 395, 585, 395));
				s2.push(new coordinates(53, 433, 91, 433));
				s2.push(new coordinates(167, 433, 433, 433));
				s2.push(new coordinates(471, 433, 585, 433));
				s2.push(new coordinates(91, 471, 129, 471));
				s2.push(new coordinates(167, 471, 205, 471));
				s2.push(new coordinates(433, 471, 471, 471));
				s2.push(new coordinates(547, 471, 585, 471));
				s2.push(new coordinates(53, 509, 91, 509));
				s2.push(new coordinates(205, 509, 243, 509));
				s2.push(new coordinates(319, 509, 395, 509));
				s2.push(new coordinates(471, 509, 547, 509));
				s2.push(new coordinates(53, 547, 167, 547));
				s2.push(new coordinates(243, 547, 357, 547));
				s2.push(new coordinates(395, 547, 471, 547));
				s2.push(new coordinates(547, 547, 585, 547));
			}
			var crash = false;
			function collision(obj){
        	if (!(((y+25) < obj.y1) || (y > obj.y2) || ((x+25) < obj.x1) || (x > obj.x2))) {
        			crash = true;
        	}
    		}
    		function collide(){
    			crash = false;
    			if(m==1){
    			for(var d=0; d<s.length; d++){
    				collision(s[d]);
    			}
    		}
    			else if (m==2){
    				for(var d=0; d<s1.length; d++){
    				collision(s1[d]);
    			}
    			}
    			else if(m==3){
    				for(var d=0; d<s2.length; d++){
    				collision(s2[d]);
    			}
    			}
    		}
    		function disp(){
    			var i;
    			if(m==1){
				for(i=0; i<s.length; i++){
					gx.beginPath();
					gx.moveTo(s[i].x1, s[i].y1);
					gx.lineTo(s[i].x2, s[i].y2);
					gx.stroke();
    			}
    		}
    			else if(m==2){
    				for(i=0; i<s1.length; i++){
					gx.beginPath();
					gx.moveTo(s1[i].x1, s1[i].y1);
					gx.lineTo(s1[i].x2, s1[i].y2);
					gx.stroke();
    			}
    			}
    			else if(m==3){
    				for(i=0; i<s2.length; i++){
					gx.beginPath();
					gx.moveTo(s2[i].x1, s2[i].y1);
					gx.lineTo(s2[i].x2, s2[i].y2);
					gx.stroke();
    			}
    			}
    		}
    		var t,pq,l=false;
    		function deadtime(){
    			l=false;
   				var k = document.getElementById("time");
   				if(m==1){
   				if (!(((y+25) < 519) || (y > 592) || ((x+25) < 592) || (x > 592))){
        				l = true;
        			}
   				if(l==true && t>0){
    				alert("Level-1 has been successfully completed");
    				m++;
    				clearInterval(pq);
    				p=0;
    				gx.clearRect(0, 0, c.width, c.height);
    				document.getElementById("time").value = 80;
    				document.getElementById("lev").value = m;
    			}
    			}
    			else if(m==2){
    				if (!(((y+25) < 545) || (y > 594) || ((x+25) < 594) || (x > 594))){
        				l = true;
        			}
   					if(l==true && t>0){
    					alert("Level-2 has been successfully completed");
    					m++;
    					clearInterval(pq);
    					p=0;
    					gx.clearRect(0, 0, c.width, c.height);
    					document.getElementById("time").value = 100;
    					document.getElementById("lev").value = m;
    			}
    			else if (m==3){
    				if (!(((y+25) < 433) || (y > 471) || ((x+25) < 585) || (x > 585))){
        				l = true;
        			}
   					if(l==true && t>0){
    					alert("Level-3 has been successfully completed");
    					clearInterval(pq);
    					p=0;
    					gx.clearRect(0, 0, c.width, c.height);
    					document.getElementById("time").value = 120;
    			}
    			}	
    			}
    			if(!t){
    				alert("Game Over");
    				clearInterval(pq);
    				p=0;
    				gx.clearRect(0, 0, c.width, c.height);
    				document.getElementById("lev").value = m;
    			}
    			else
    				t--;
    			k.value = t;
    		}
    		function StartGame(){
    			p=1;
    			if(m==1){
    				t=80;
    				maze1();
    			}
    			else if(m==2){
    				t=100;
    				maze2();
    			}
    			else if(m==3){
    				t=120;
    				maze3();
    			}
    			pq = setInterval(deadtime, 1000);
    		}