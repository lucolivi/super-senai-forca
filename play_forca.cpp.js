// #include <stdio.h>
// #include <conio.h>
// #include <dos.h>
// #include <stdlib.h>

// void main()
async function main()
{
	// _setcursortype(_NOCURSOR);

	var sair=0,tecla=0,dif=13,pres,GAMEN=0,win=0,lose=0,erros,tecla3=0,fim=0,replay=0,cast;
	var tecla2=0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15;
	textcolor(WHITE);
	clrscr();

	//Inicio apresentacao

	gotoxy(30,10);cprintf("LUCAS GAMES APRESENTA");
	await sleep(3);
	gotoxy(30,10);printf("                     ");
	await sleep(2);
	gotoxy(20,10);cprintf("UMA CRIACAO DE LUCAS VIEIRA DE OLIVEIRA");
	await sleep(3);
	gotoxy(20,10);printf("                                       ");
	await sleep(2);
	gotoxy(14,10);cprintf("COMO AVALICAO DA DISCIPLINA LINGUAGENS DE PROGRAMACAO");
	await sleep(3);
	gotoxy(14,10);printf("                                                     ");
	await sleep(2);
	//Fim apresentacao
	//Inicio Menu Jogo

	for(pres=0;pres<=12;pres++)
	{
		gotoxy(20,10);cprintf("*-*-*-*-* SUPER SENAI FORCA *-*-*-*-*");
		await delay(100);
		gotoxy(20,10);printf("                                     ");
		await delay(100);
	}
	await sleep(2);


	gotoxy(10,10);cprintf  ("┌──────────┐");
	gotoxy(10,11);cprintf  ("│          O");
	gotoxy(10,12);cprintf  ("│         ┌┼┐");
	gotoxy(10,13);cprintf  ("│         ┌┴┐");
	gotoxy(10,14);cprintf  ("│       ╓─────╖");
	gotoxy(10,15);cprintf  ("│       ║     ║");
	gotoxy(10,16);cprintf  ("│       ║     ║");
	gotoxy(10,17);cprintf  ("│       ║     ║");
	gotoxy(7,18);cprintf("───┴───    ╨     ╨");

	await sleep(1);




	gotoxy(10,10);cprintf  ("┌──────────┐");
	gotoxy(10,11);cprintf  ("│          │");
	gotoxy(10,12);cprintf  ("│          │ ");
	gotoxy(10,13);cprintf  ("│          O ");
	gotoxy(10,14);cprintf  ("│       ╓┐┌┼┐┌╖");
	gotoxy(10,15);cprintf  ("│       ║│┌┴┐│║");
	gotoxy(10,16);cprintf  ("│       ║     ║");
	gotoxy(10,17);cprintf  ("│       ║     ║");
	gotoxy(7,18);cprintf("───┴───    ╨     ╨");

	await sleep(1);
	gotoxy(20,5);cprintf("*-*-*-*-* SUPER SENAI FORCA *-*-*-*-*");
	await sleep(1);

	while(replay==0){
	clrscr();
	sair=0;tecla=0;dif=13;GAMEN=0;tecla3=0;fim=0;
	textcolor(WHITE);
	gotoxy(20,5);cprintf("*-*-*-*-* SUPER SENAI FORCA *-*-*-*-*");
	gotoxy(10,10);cprintf  ("┌──────────┐");
	gotoxy(10,11);cprintf  ("│          │");
	gotoxy(10,12);cprintf  ("│          │ ");
	gotoxy(10,13);cprintf  ("│          O ");
	gotoxy(10,14);cprintf  ("│       ╓┐┌┼┐┌╖");
	gotoxy(10,15);cprintf  ("│       ║│┌┴┐│║");
	gotoxy(10,16);cprintf  ("│       ║     ║");
	gotoxy(10,17);cprintf  ("│       ║     ║");
	gotoxy(7,18);cprintf("───┴───    ╨     ╨");
	gotoxy(25,8);textcolor(YELLOW);cprintf("-Escolha a Dificuldade e Pressione ESPACO-");
	gotoxy(40,13);cprintf(" Facil");
	gotoxy(40,14);cprintf(" Medio");
	gotoxy(40,15);cprintf("Dificil");
	gotoxy(40,18);cprintf(" Sair ");




	while(sair==0)
	{
	  gotoxy(38,dif);textcolor(GREEN);cprintf("»");gotoxy(48,dif);cprintf("«");
	  tecla=await getch();
	  //gotoxy(10,10);printf("%d",tecla);
	  if(tecla==80)
	  {
		gotoxy(38,dif);printf(" ");gotoxy(48,dif);printf(" ");
		dif++;
		if(dif==16||dif>18){dif=18;}

	  }

	  if(tecla==72)
	  {
		gotoxy(38,dif);printf(" ");gotoxy(48,dif);printf(" ");
		dif--;
		if(dif<13){dif=13;}
		if(dif==17){dif=15;}
	  }
	  textcolor(WHITE);

	  if(tecla==32)
	  {
		sair=1;
		if(dif==18){replay=1;}
		if(dif!=18)
		{
		clrscr();
		gotoxy(2,3);cprintf("INSTRUCOES:");
		gotoxy(2,8);cprintf("Verifique a dica, numero de caracteres e aperte as letras do teclado para");
		gotoxy(2,9);cprintf("tentar acertar a palavra.");
		gotoxy(2,12);cprintf("Cuidado! Se você errar 6 vezes, você perde o jogo! ");
		gotoxy(2,14);cprintf("Importante! Desative a tecla CAPS LOCK do seu teclado.");
		gotoxy(2,17);cprintf("Boa Sorte!");
		gotoxy(2,22);cprintf("  Pressione qualquer tecla para comecar");
		await getch();
		clrscr();
		gotoxy(10,8);cprintf   ("┌──────────┐");
		gotoxy(10,9);cprintf   ("│           ");
		gotoxy(10,10);cprintf  ("│            ");
		gotoxy(10,11);cprintf  ("│            ");
		gotoxy(10,12);cprintf  ("│       ╓─────╖");
		gotoxy(10,13);cprintf  ("│       ║     ║");
		gotoxy(10,14);cprintf  ("│       ║     ║");
		gotoxy(10,15);cprintf  ("│       ║     ║");
		gotoxy(7,16);cprintf("───┴───    ╨     ╨");
		gotoxy(7,19);cprintf("Dica:");
		gotoxy(7,22);cprintf("Erros:");

		switch(dif)
		{

			case 13:
			randomize();
			GAMEN=rand()%10+1;gotoxy(15,4);cprintf("Nivel: Facil");

			break;

			case 14:
			randomize();
			GAMEN=rand()%10+11;gotoxy(15,4);cprintf("Nivel: Medio");

			break;

			case 15:
			randomize();
			GAMEN=rand()%10+21;gotoxy(15,4);cprintf("Nivel: Dificil");

			break;

		}
		}


	  }
	}
	  erros=15;win=0;lose=0;
	  l1=0;l2=0;l3=0;l4=0;l5=0;l6=0;l7=0;l8=0;l9=0;
	  l10=0;l11=0;l12=0;l13=0;l14=0;l15=0;
	  switch(GAMEN)
	  {
		case 0: break;


		//Dificuldade Facil
		case 1:
		gotoxy(42,13);cprintf("-> ___________ <-");
		gotoxy(13,19);cprintf("Moradia");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='a'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='p'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='a'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='r'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='t'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='a'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='m'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='e'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='n'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='t'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='o'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}

		 if(tecla2!='a'&&tecla2!='p'&&tecla2!='a'&&tecla2!='r'&&tecla2!='t'
		 &&tecla2!='a'&&tecla2!='m'&&tecla2!='e'&&tecla2!='n'&&tecla2!='t'
		 &&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1){win=1;}
		}

		break;//


		case 2:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Esporte");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='f'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='u'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='t'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='b'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='o'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='l'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}


		 if(tecla2!='f'&&tecla2!='u'&&tecla2!='t'&&tecla2!='e'&&tecla2!='b'
		 &&tecla2!='o'&&tecla2!='l')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//

		case 3:
		gotoxy(42,13);cprintf("-> ______ <-");
		gotoxy(13,19);cprintf("Vestimenta");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='s'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='p'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='t'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='o'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}

		 if(tecla2!='s'&&tecla2!='a'&&tecla2!='p'&&tecla2!='a'&&tecla2!='t'
		 &&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1){win=1;}
		}

		break;//

		case 4:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Cubo de vidro");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='a'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='q'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='u'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='r'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='i'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}

		 if(tecla2!='a'&&tecla2!='q'&&tecla2!='u'&&tecla2!='a'&&tecla2!='r'
		 &&tecla2!='i'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//

		case 5:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Comunicador");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='i'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='n'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='t'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='r'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='f'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='n'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='e'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='i'&&tecla2!='n'&&tecla2!='t'&&tecla2!='e'&&tecla2!='r'
		 &&tecla2!='f'&&tecla2!='o'&&tecla2!='n'&&tecla2!='e')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//

		case 6:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Farmacia");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='r'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='m'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='d'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='i'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}

		 if(tecla2!='r'&&tecla2!='e'&&tecla2!='m'&&tecla2!='e'&&tecla2!='d'
		 &&tecla2!='i'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//

		case 7:
		gotoxy(42,13);cprintf("-> __________ <-");
		gotoxy(13,19);cprintf("Tecnologia");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='c'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='o'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='m'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='p'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='u'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='t'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='a'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='d'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='o'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='r'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}

		 if(tecla2!='c'&&tecla2!='o'&&tecla2!='m'&&tecla2!='p'&&tecla2!='u'
		 &&tecla2!='t'&&tecla2!='a'&&tecla2!='d'&&tecla2!='o'&&tecla2!='r')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1){win=1;}
		}

		break;//

		case 8:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Literatura");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='r'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='v'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='i'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='s'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='t'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='a'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}

		 if(tecla2!='r'&&tecla2!='e'&&tecla2!='v'&&tecla2!='i'&&tecla2!='s'
		 &&tecla2!='t'&&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//

		case 9:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Movel");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='e'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='s'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='t'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='n'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='t'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='e'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}

		 if(tecla2!='e'&&tecla2!='s'&&tecla2!='t'&&tecla2!='a'&&tecla2!='n'
		 &&tecla2!='t'&&tecla2!='e')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//

		case 10:
		gotoxy(42,13);cprintf("-> ________ <-");
		gotoxy(13,19);cprintf("Banheiro");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='c'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='h'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='u'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='v'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='e'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='i'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='r'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='o'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}

		 if(tecla2!='c'&&tecla2!='h'&&tecla2!='u'&&tecla2!='v'&&tecla2!='e'
		 &&tecla2!='i'&&tecla2!='r'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1){win=1;}
		}

		break;//

		//Dificuldade Medio
		case 11:
		gotoxy(42,13);cprintf("-> _______________ <-");
		gotoxy(13,19);cprintf("Evolucao");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='d'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='s'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='n'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='v'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='l'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='v'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='i'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='m'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}
		 if(tecla2=='e'){gotoxy(56,13);cprintf("%c",tecla2);l12=1;}
		 if(tecla2=='n'){gotoxy(57,13);cprintf("%c",tecla2);l13=1;}
		 if(tecla2=='t'){gotoxy(58,13);cprintf("%c",tecla2);l14=1;}
		 if(tecla2=='o'){gotoxy(59,13);cprintf("%c",tecla2);l15=1;}

		 if(tecla2!='d'&&tecla2!='e'&&tecla2!='s'&&tecla2!='e'&&tecla2!='n'
		 &&tecla2!='v'&&tecla2!='o'&&tecla2!='l'&&tecla2!='v'&&tecla2!='i'
		 &&tecla2!='m'&&tecla2!='e'&&tecla2!='n'&&tecla2!='t'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1&&l12==1&&l13==1&&l14==1&&l15==1){win=1;}
		}

		break;//

		case 12:
		gotoxy(42,13);cprintf("-> ______________ <-");
		gotoxy(13,19);cprintf("Ignorante");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='p'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='r'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='e'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='c'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='o'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='n'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='c'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='e'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='i'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='t'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='u'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}
		 if(tecla2=='o'){gotoxy(56,13);cprintf("%c",tecla2);l12=1;}
		 if(tecla2=='s'){gotoxy(57,13);cprintf("%c",tecla2);l13=1;}
		 if(tecla2=='o'){gotoxy(58,13);cprintf("%c",tecla2);l14=1;}

		 if(tecla2!='p'&&tecla2!='r'&&tecla2!='e'&&tecla2!='c'&&tecla2!='o'
		 &&tecla2!='n'&&tecla2!='c'&&tecla2!='e'&&tecla2!='i'&&tecla2!='t'
		 &&tecla2!='u'&&tecla2!='o'&&tecla2!='s'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1&&l12==1&&l13==1&&l14==1){win=1;}
		}

		break;//

		case 13:
		gotoxy(42,13);cprintf("-> _____________ <-");
		gotoxy(13,19);cprintf("Carne");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='c'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='h'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='u'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='r'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='r'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='a'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='s'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='q'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='u'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='e'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='i'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}
		 if(tecla2=='r'){gotoxy(56,13);cprintf("%c",tecla2);l12=1;}
		 if(tecla2=='a'){gotoxy(57,13);cprintf("%c",tecla2);l13=1;}

		 if(tecla2!='c'&&tecla2!='h'&&tecla2!='u'&&tecla2!='r'&&tecla2!='r'
		 &&tecla2!='a'&&tecla2!='s'&&tecla2!='q'&&tecla2!='u'&&tecla2!='e'
		 &&tecla2!='i'&&tecla2!='r'&&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1&&l12==1&&l13==1){win=1;}
		}

		break;//

		case 14:
		gotoxy(42,13);cprintf("-> _____________ <-");
		gotoxy(13,19);cprintf("Parcelar");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='f'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='i'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='n'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='n'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='c'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='i'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='a'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='m'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='e'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='n'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}
		 if(tecla2=='t'){gotoxy(56,13);cprintf("%c",tecla2);l12=1;}
		 if(tecla2=='o'){gotoxy(57,13);cprintf("%c",tecla2);l13=1;}


		 if(tecla2!='f'&&tecla2!='i'&&tecla2!='n'&&tecla2!='a'&&tecla2!='n'
		 &&tecla2!='c'&&tecla2!='i'&&tecla2!='a'&&tecla2!='m'&&tecla2!='e'
		 &&tecla2!='n'&&tecla2!='t'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1&&l12==1&&l13==1){win=1;}
		}

		break;//

		case 15:
		gotoxy(42,13);cprintf("-> _______________ <-");
		gotoxy(13,19);cprintf("Plateia");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='t'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='l'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='s'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='p'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='e'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='c'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='t'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='a'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='d'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}
		 if(tecla2=='o'){gotoxy(56,13);cprintf("%c",tecla2);l12=1;}
		 if(tecla2=='r'){gotoxy(57,13);cprintf("%c",tecla2);l13=1;}
		 if(tecla2=='e'){gotoxy(58,13);cprintf("%c",tecla2);l14=1;}
		 if(tecla2=='s'){gotoxy(59,13);cprintf("%c",tecla2);l15=1;}

		 if(tecla2!='t'&&tecla2!='e'&&tecla2!='l'&&tecla2!='e'&&tecla2!='s'
		 &&tecla2!='p'&&tecla2!='e'&&tecla2!='c'&&tecla2!='t'&&tecla2!='a'
		 &&tecla2!='d'&&tecla2!='o'&&tecla2!='r'&&tecla2!='e'&&tecla2!='s')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1&&l12==1&&l13==1&&l14==1&&l15==1){win=1;}
		}

		break;//

		case 16:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Igreja");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='c'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='s'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='m'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='e'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='n'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='t'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='o'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='c'&&tecla2!='a'&&tecla2!='s'&&tecla2!='a'&&tecla2!='m'
		 &&tecla2!='e'&&tecla2!='n'&&tecla2!='t'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//


		case 17:
		gotoxy(42,13);cprintf("-> __________ <-");
		gotoxy(13,19);cprintf("Rural");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='f'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='z'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='n'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='d'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='e'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='i'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='r'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='o'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}


		 if(tecla2!='f'&&tecla2!='a'&&tecla2!='z'&&tecla2!='e'&&tecla2!='n'
		 &&tecla2!='d'&&tecla2!='e'&&tecla2!='i'&&tecla2!='r'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1){win=1;}
		}

		break;//


		case 18:
		gotoxy(42,13);cprintf("-> __________ <-");
		gotoxy(13,19);cprintf("Disputa");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='c'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='m'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='p'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='e'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='o'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='n'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='a'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='t'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='o'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}

		 if(tecla2!='c'&&tecla2!='a'&&tecla2!='m'&&tecla2!='p'&&tecla2!='e'
		 &&tecla2!='o'&&tecla2!='n'&&tecla2!='a'&&tecla2!='t'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1){win=1;}
		}

		break;//


		case 19:
		gotoxy(42,13);cprintf("-> ________ <-");
		gotoxy(13,19);cprintf("Protecao");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='a'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='r'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='m'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='a'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='d'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='u'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='r'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='a'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}

		 if(tecla2!='a'&&tecla2!='r'&&tecla2!='m'&&tecla2!='a'&&tecla2!='d'
		 &&tecla2!='u'&&tecla2!='r'&&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1){win=1;}
		}

		break;//


		case 20:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Empenhado");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='e'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='s'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='t'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='u'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='d'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='i'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='s'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='o'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='e'&&tecla2!='s'&&tecla2!='t'&&tecla2!='u'&&tecla2!='d'
		 &&tecla2!='i'&&tecla2!='o'&&tecla2!='s'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//



		//Dificuldade Dificil
		case 21:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Confusao");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='b'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='l'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='b'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='u'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='r'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='d'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='i'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='a'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='b'&&tecla2!='a'&&tecla2!='l'&&tecla2!='b'&&tecla2!='u'
		 &&tecla2!='r'&&tecla2!='d'&&tecla2!='i'&&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//


		case 22:
		gotoxy(42,13);cprintf("-> ___________ <-");
		gotoxy(13,19);cprintf("Termino");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='f'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='n'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='e'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='c'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='i'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='m'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='e'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='n'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='t'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='o'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}

		 if(tecla2!='f'&&tecla2!='e'&&tecla2!='n'&&tecla2!='e'&&tecla2!='c'
		 &&tecla2!='i'&&tecla2!='m'&&tecla2!='e'&&tecla2!='n'&&tecla2!='t'
		 &&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1){win=1;}
		}

		break;//


		case 23:
		gotoxy(42,13);cprintf("-> __________ <-");
		gotoxy(13,19);cprintf("Impertubavel");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='f'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='l'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='e'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='u'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='m'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='a'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='t'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='i'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='c'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='o'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}

		 if(tecla2!='f'&&tecla2!='l'&&tecla2!='e'&&tecla2!='u'&&tecla2!='m'
		 &&tecla2!='a'&&tecla2!='t'&&tecla2!='i'&&tecla2!='c'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1){win=1;}
		}

		break;//


		case 24:
		gotoxy(42,13);cprintf("-> ________ <-");
		gotoxy(13,19);cprintf("Intacto");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='i'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='n'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='c'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='o'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='l'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='u'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='m'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='e'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}

		 if(tecla2!='i'&&tecla2!='n'&&tecla2!='c'&&tecla2!='o'&&tecla2!='l'
		 &&tecla2!='u'&&tecla2!='m'&&tecla2!='e')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1){win=1;}
		}

		break;//


		case 25:
		gotoxy(42,13);cprintf("-> ___________ <-");
		gotoxy(13,19);cprintf("Pessoa serena");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='p'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='a'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='c'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='h'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='o'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='r'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='r'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='e'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='n'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='t'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='a'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}

		 if(tecla2!='p'&&tecla2!='a'&&tecla2!='c'&&tecla2!='h'&&tecla2!='o'
		 &&tecla2!='r'&&tecla2!='r'&&tecla2!='e'&&tecla2!='n'&&tecla2!='t'
		 &&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1){win=1;}
		}

		break;//


		case 26:
		gotoxy(42,13);cprintf("-> __________ <-");
		gotoxy(13,19);cprintf("Esnobe");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='p'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='r'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='n'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='o'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='s'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='t'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='i'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='c'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='o'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}

		 if(tecla2!='p'&&tecla2!='e'&&tecla2!='r'&&tecla2!='n'&&tecla2!='o'
		 &&tecla2!='s'&&tecla2!='t'&&tecla2!='i'&&tecla2!='c'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1){win=1;}
		}

		break;//


		case 27:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Oculto");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='r'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='c'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='o'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='n'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='d'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='i'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='t'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='o'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='r'&&tecla2!='e'&&tecla2!='c'&&tecla2!='o'&&tecla2!='n'
		 &&tecla2!='d'&&tecla2!='i'&&tecla2!='t'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//


		case 28:
		gotoxy(42,13);cprintf("-> ___________ <-");
		gotoxy(13,19);cprintf("Desculpar-se");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='t'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='e'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='r'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='g'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='i'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='v'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='e'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='r'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='s'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}
		 if(tecla2=='a'){gotoxy(54,13);cprintf("%c",tecla2);l10=1;}
		 if(tecla2=='r'){gotoxy(55,13);cprintf("%c",tecla2);l11=1;}

		 if(tecla2!='t'&&tecla2!='e'&&tecla2!='r'&&tecla2!='g'&&tecla2!='i'
		 &&tecla2!='v'&&tecla2!='e'&&tecla2!='r'&&tecla2!='s'&&tecla2!='a'
		 &&tecla2!='r')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1
		 &&l10==1&&l11==1){win=1;}
		}

		break;//


		case 29:
		gotoxy(42,13);cprintf("-> _________ <-");
		gotoxy(13,19);cprintf("Divisao");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='d'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='i'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='c'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='o'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='t'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='o'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='m'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}
		 if(tecla2=='i'){gotoxy(52,13);cprintf("%c",tecla2);l8=1;}
		 if(tecla2=='a'){gotoxy(53,13);cprintf("%c",tecla2);l9=1;}

		 if(tecla2!='d'&&tecla2!='i'&&tecla2!='c'&&tecla2!='o'&&tecla2!='t'
		 &&tecla2!='o'&&tecla2!='m'&&tecla2!='i'&&tecla2!='a')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1&&l8==1&&l9==1){win=1;}
		}

		break;//


		case 30:
		gotoxy(42,13);cprintf("-> _______ <-");
		gotoxy(13,19);cprintf("Passageiro");
		while(lose!=6&&win==0)
		{
		 tecla2=await getch();
		 if(tecla2=='e'){gotoxy(45,13);cprintf("%c",tecla2);l1=1;}
		 if(tecla2=='f'){gotoxy(46,13);cprintf("%c",tecla2);l2=1;}
		 if(tecla2=='e'){gotoxy(47,13);cprintf("%c",tecla2);l3=1;}
		 if(tecla2=='m'){gotoxy(48,13);cprintf("%c",tecla2);l4=1;}
		 if(tecla2=='e'){gotoxy(49,13);cprintf("%c",tecla2);l5=1;}
		 if(tecla2=='r'){gotoxy(50,13);cprintf("%c",tecla2);l6=1;}
		 if(tecla2=='o'){gotoxy(51,13);cprintf("%c",tecla2);l7=1;}

		 if(tecla2!='e'&&tecla2!='f'&&tecla2!='e'&&tecla2!='m'&&tecla2!='e'
		 &&tecla2!='r'&&tecla2!='o')
		 {
			if(erros==15){gotoxy(21,9);cprintf("O");}
			if(erros==17){gotoxy(21,10);cprintf("┼");gotoxy(21,11);
			cprintf("┴");}
			if(erros==19){gotoxy(20,10);cprintf("┌");}
			if(erros==21){gotoxy(22,10);cprintf("┐");}
			if(erros==23){gotoxy(20,11);cprintf("┌");}

			gotoxy(erros,22);cprintf("%c",tecla2);erros=erros+2;lose++;
		 }
		 if(l1==1&&l2==1&&l3==1&&l4==1&&l5==1&&l6==1&&l7==1){win=1;}
		}

		break;//


	  }

	  if(lose==6)
	  {
		gotoxy(33,8);cprintf("Que triste, você foi enforcado!");
		gotoxy(10,8);cprintf   ("┌──────────┐");
		gotoxy(10,9);cprintf   ("│          │");
		gotoxy(10,10);cprintf  ("│          │ ");
		gotoxy(10,11);cprintf  ("│          O ");
		gotoxy(10,12);cprintf  ("│       ╓┐┌┼┐┌╖");
		gotoxy(10,13);cprintf  ("│       ║│┌┴┐│║");
		gotoxy(10,14);cprintf  ("│       ║     ║");
		gotoxy(10,15);cprintf  ("│       ║     ║");
		gotoxy(7,16);cprintf("───┴───    ╨     ╨");
	  }

	  if(win==1)
	  {
		gotoxy(33,8);cprintf("Parabens, você acertou a palavra!");
		gotoxy(10,8);cprintf   ("┌──────────┐");
		gotoxy(10,9);cprintf   ("│           ");
		gotoxy(10,10);cprintf  ("│            ");
		gotoxy(10,11);cprintf  ("│            ");
		gotoxy(10,12);cprintf  ("│       ╓─────╖");
		gotoxy(10,13);cprintf  ("│       ║     ║        O");
		gotoxy(10,14);cprintf  ("│       ║     ║       └┼┘");
		gotoxy(10,15);cprintf  ("│       ║     ║       ┌┴┐");
		gotoxy(7,16);cprintf("───┴───    ╨     ╨");
	  }
	  if(win==1||lose==6){
	  if(win==1){gotoxy(38,20);cprintf("Deseja jogar novamente?");}
	  else{gotoxy(38,20);cprintf("Deseja tentar novamente?");}
	  gotoxy(46,22);cprintf("» Sim «");
	  gotoxy(46,23);cprintf("  Nao  ");

	  while(dif!=18)
	  {
		tecla3=await getch();

		if(tecla3==80)//nao
		{
			gotoxy(46,22);printf(" ");gotoxy(52,22);printf(" ");
			gotoxy(46,23);cprintf("»");gotoxy(52,23);cprintf("«");
			fim=1;replay=1;
		}
		if(tecla3==72)//sim
		{
			gotoxy(46,23);printf(" ");gotoxy(52,23);printf(" ");
			gotoxy(46,22);cprintf("»");gotoxy(52,22);cprintf("«");
			fim=0;replay=0;
		}
		if(tecla3==32)
		{
			if(fim==1)
			{
				if(win==1)
				{
					clrscr();
					gotoxy(37,2);cprintf("CAST");
					gotoxy(10,5);cprintf("Diretor");gotoxy(50,5);printf("Lucas Vieira de Oliveira");
					gotoxy(10,6);cprintf("Coordenador");gotoxy(50,6);printf("Lucas Vieira de Oliveira");
					gotoxy(10,7);cprintf("Programador");gotoxy(50,7);printf("Lucas Vieira de Oliveira");
					gotoxy(10,8);cprintf("Coordenador de Arte");gotoxy(50,8);printf("Lucas Vieira de Oliveira");
					gotoxy(10,9);cprintf("Coordenador de Projeto");gotoxy(50,9);printf("Lucas Vieira de Oliveira");
					gotoxy(10,10);cprintf("Auxiliar Tecnico");gotoxy(50,10);printf("Lucas Vieira de Oliveira");
					gotoxy(10,11);cprintf("Auxiliar de Programacao");gotoxy(50,11);printf("Lucas Vieira de Oliveira");
					gotoxy(10,12);cprintf("Auxiliar Artistico");gotoxy(50,12);printf("Lucas Vieira de Oliveira");
					gotoxy(10,13);cprintf("Auxiliar");gotoxy(50,13);printf("Lucas Vieira de Oliveira");
					gotoxy(10,14);cprintf("Secretario");gotoxy(50,14);printf("Lucas Vieira de Oliveira");
					gotoxy(10,15);cprintf("Telefonista");gotoxy(50,15);printf("Lucas Vieira de Oliveira");
					gotoxy(10,16);cprintf("Motoboy");gotoxy(50,16);printf("Lucas Vieira de Oliveira");
					gotoxy(33,18);cprintf("AGRADECIMENTOS");
					gotoxy(10,20);cprintf("Minha Mae");gotoxy(50,20);printf("Yvone Vieira de Oliveira");
					gotoxy(1,23);cprintf("Copyright 2010. Lucas Games Corporation. Todos os Direitos Reservados.");
					gotoxy(50,25);cprintf("Pressione qualquer tecla...");
					await getch();clrscr();
					textcolor(YELLOW);
					for(cast=0;cast<=10;cast++)
					{
					await delay(70);
					gotoxy(20,2);cprintf("                                     ");
					await delay(70);
					gotoxy(20,2);cprintf("*-*-*-*-* SUPER SENAI FORCA *-*-*-*-*");
					}
					await sleep(2);
					gotoxy(25,4);cprintf   ("┌──────────┐");
					gotoxy(25,5);cprintf   ("│           ");
					gotoxy(25,6);cprintf  ("│            ");
					gotoxy(25,7);cprintf  ("│            ");
					gotoxy(25,8);cprintf  ("│       ╓─────╖");
					gotoxy(25,9);cprintf  ("│       ║     ║        O");
					gotoxy(25,10);cprintf  ("│       ║     ║       └┼┘");
					gotoxy(25,11);cprintf  ("│       ║     ║       ┌┴┐");
					gotoxy(22,12);cprintf("───┴───    ╨     ╨");
					await delay(200);gotoxy(20,17);cprintf("O");
					await delay(200);gotoxy(22,17);cprintf("B");
					await delay(200);gotoxy(24,17);cprintf("R");
					await delay(200);gotoxy(26,17);cprintf("I");
					await delay(200);gotoxy(28,17);cprintf("G");
					await delay(200);gotoxy(30,17);cprintf("A");
					await delay(200);gotoxy(32,17);cprintf("D");
					await delay(200);gotoxy(34,17);cprintf("O");
					await delay(200);gotoxy(36,17);cprintf(" ");
					await delay(200);gotoxy(38,17);cprintf("P");
					await delay(200);gotoxy(40,17);cprintf("O");
					await delay(200);gotoxy(42,17);cprintf("R");
					await delay(200);gotoxy(44,17);cprintf(" ");
					await delay(200);gotoxy(46,17);cprintf("J");
					await delay(200);gotoxy(48,17);cprintf("O");
					await delay(200);gotoxy(50,17);cprintf("G");
					await delay(200);gotoxy(52,17);cprintf("A");
					await delay(200);gotoxy(54,17);cprintf("R");
					await delay(200);gotoxy(56,17);cprintf("!");
					await sleep(1);
					gotoxy(42,25);cprintf("Pressione qualquer tecla para sair...");
					await getch();

				}
				if(lose==6)
				{
					clrscr();
					textcolor(GREEN);
					await delay(500);gotoxy(20,2);cprintf("*-*-*-*-* SUPER SENAI FORCA *-*-*-*-*");
					await delay(500);gotoxy(20,5);cprintf   ("┌──────────┐");
					gotoxy(20,6);cprintf   ("│          │");
					gotoxy(20,7);cprintf  ("│          │ ");
					gotoxy(20,8);cprintf  ("│          O ");
					gotoxy(20,9);cprintf  ("│       ╓┐┌┼┐┌╖");
					gotoxy(20,10);cprintf  ("│       ║│┌┴┐│║");
					gotoxy(20,11);cprintf  ("│       ║     ║");
					gotoxy(20,12);cprintf  ("│       ║     ║");
					gotoxy(17,13);cprintf("───┴───    ╨     ╨");
					await delay(500);gotoxy(20,17);cprintf("O b r i g a d o   p o r   j o g a r !");
					await delay(500);gotoxy(1,23);cprintf("Copyright 2010. Lucas Games Corporation. Todos os Direitos Reservados.");
					await delay(500);gotoxy(42,25);cprintf("Pressione qualquer tecla para sair...");
					await getch();
				}
			}

			dif=18;}//


		}



	  }
	  }


}











