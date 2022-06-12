import random
import sound
from time import sleep
global roll
global rollTotal
rollamount = 0
rollTotal = 0
times = 1

def QuickRoll(MinNum = 1,MaxNum = 6):
	global rollTotal
	global rollamount
	for i in range(times):
		rollamount = random.randint(MinNum,MaxNum)
		rollTotal += rollamount
		print(rollTotal)
		sound.play_effect('casino:DieThrow3')
	return rollTotal

def rollAmount(Amount):
	global times
	times = Amount
	if times > 100:
		print("You can't make it more then 100.")
		times = 1

def roll(MinNum = 1,MaxNum = 6):
	global rollTotal
	global rollamount
	rollTotal = 0
	for i in range(times):
		rollamount = random.randint(MinNum,MaxNum)
		rollTotal += rollamount
		print(rollTotal)
		sound.play_effect('casino:DieThrow3')
		sleep(0.4)
	return rollTotal
