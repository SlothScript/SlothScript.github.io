# UBG is untitled board game, also UBG is in its beta stage meaning that its broken. It still kinda works.

import console
import Dice
import random
import timeit

global index
global rollTotal

a = 0
b = 0
c = 0
d = 0
e = 0
square = 0
squarenum = 0

allspaceslist = ["Normal","Go up 2","Go back to start >:)","Go back 3"]
goodspaceslist = ["Go up 2", "Go up 2","Go up 2"]
badspaceslist = ["Go back 3","Go back 3","Go back to start >:)","Go back 3","Go back 3","Go back 3","Go back 3","Go back 3","Go back 3"]

removedcount = 0
board = {}
cn = []
boardItems = []
boardValues = []
index = -1

spaces = 20
powerupspaces = 5
badspaces = 5

console.set_font("<System>",40)
print("Welcome To Untitled Board Game!")

wtd = input("Play or Settings (type P or S YOU MUST USE CAPS)")

def GenerateBoard(spaces,powerupspaces,badspaces):
	global index
	global cn
	global removedcount
	global board
	print("Generating bad spaces...")
	for a in range(badspaces):
		boardItems.append(random.choices(badspaceslist))
		boardValues.append(random.randint(1,spaces))
		index += 1
		for b in boardValues:
			if c in cn:
				boardValues.remove(c)
				boardItems.remove(boardItems[index])
				removedcount += 1
		for d in range(removedcount):
			boardItems.append(random.choices(badspaceslist))
			boardValues.append(random.randint(1,spaces))
			if e in cn:
				boardValues.remove(e)
				boardItems.remove(boardItems[index])
				removedcount += 1
		cn.append(b)
	console.clear()
	print("Generating good spaces...")
	for a in range(powerupspaces):
		boardItems.append(random.choices(goodspaceslist))
		boardValues.append(random.randint(1,spaces))
		index += 1
		for b in boardValues:
			if c in cn:
				boardValues.remove(c)
				boardItems.remove(boardItems[index])
				removedcount += 1
		for d in range(removedcount):
			boardItems.append(random.choices(goodspaceslist))
			boardValues.append(random.randint(1,spaces))
			if e in cn:
				boardValues.remove(e)
				boardItems.remove(boardItems[index])
				removedcount += 1
		cn.append(b)
		console.clear()
		print("Almost done...")
		board = dict(zip(boardValues,boardItems))
		print(f"Generation complete! Heres the board! {board} (Spaces with no value are normal spaces) Press anything to play with that board")
		print()

def Playgame():
	global squarenum
	global square
	global rollTotal
	GenerateBoard(spaces,powerupspaces,badspaces)
	starttime = timeit.default_timer()
	print("Alright heres how to play 1. Roll your dice. You really just have to press enter.")
	input()
	Dice.roll(1,6)
	rollTotal = Dice.rollTotal
	print(rollTotal,end=' ')
	print("<--- That is your roll total, you will move that much when you press enter.")
	input()
	squarenum += rollTotal
	if int(squarenum) in board:
		square = board.get(squarenum)
	else:
		square = "Normal"
	print(square,end=" ")
	print("<--- Thats the square you landed on. Some do special things!")
	if square == "Normal":
		print("",end="")
	elif square == "Go up 2":
		squarenum += 2
	elif square == "Go back 3":
		squarenum -= 3
	elif square == "Go back to start >:)":
		squarenum = 0
	
	print("Thats all there really is to it! It just loops until you get to the end.")
	while not squarenum >= spaces:
		print("Roll (Press enter)")
		input()
		Dice.roll()
		rollTotal = Dice.rollTotal
		print(rollTotal,end=' ')
		input()
		squarenum += rollTotal
		if int(squarenum) in board:
			square = board.get(squarenum)
		else:
			square = "Normal"
		print(square)
		if square == "Normal":
			print()
		elif square == "Go up 2":
			squarenum += 2
		elif square == "Go back 3":
			squarenum -= 3
		elif square == "Go back to start >:)":
			squarenum = 0
	endtime = timeit.default_timer()
	time = round(endtime - starttime,1)
	print(f"You finished! It took you {time}!")	


def Settings():
	global spaces
	global powerupspaces
	global badspaces
	spaces = input(f"How many spaces? Current: {spaces}")
	powerupspaces = input(f"How many spaces have powerups? Current: {powerupspaces}")
	badspaces = input(f"How many spaces are bad? Current: {badspaces}")


while wtd != "P":
	if wtd != "S":
		print("Invalid key \"",wtd,"\"",sep="")
		input("P or S")
	else:	
		if wtd == "P":
			Playgame()
		else:
			Settings()
			input("P or S")
else:
	if wtd == "P":
		Playgame()
	else:
		Settings()
		input("P or S")
