#include<stdio.h>

void drawImage(int input)
{
	if(input % 2 == 0){
		printf("Tidak boleh bilangan genap");
		return;
	}
	int center = input / 2 + 1;
	
	for(int y = 1; y <= input; y++){
		
		for(int x = 1; x <= input; x++){
			
			if(x == center && y == center)
			{
				printf("#");
			}
			
			else if(x == 1 && y == 1 ||
					x == input && y == 1 ||
					x == 1 && y == input ||
					x == input && y == input)
			{
				printf("*");
			}
			
			else if(x == center && y < center ||
					x == center && y > center ||
					y == center && x < center ||
					y == center && x > center)	
			{
				printf("*");
			}
			
			else
			{
				printf("#");
			}
			
		}
		
		printf("\n");
		
	}
}

int main()
{
	int nilai;
	printf("Masukkan nilai: ");
	scanf("%d", &nilai);
	
	drawImage(nilai);
}
