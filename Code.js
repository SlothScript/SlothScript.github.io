/* All credit goes to klattmose for this, as all i did was change a few things like the desc and name. */
Game.Win('Third-party');
if(BlackholeInverter === undefined) var BlackholeInverter = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
BlackholeInverter.name = 'Black Hole Inverter';
BlackholeInverter.version = '1.13';
BlackholeInverter.GameVersion = '2.048';

BlackholeInverter.launch = function(){
	BlackholeInverter.init = function(){
		var iconsURL = 'https://klattmose.github.io/CookieClicker/img/customIcons.png';
		
		CCSE.NewBuilding('White hole',
			'white hole|white holes|extracted|[X]% larger event horizon|[X]% larger event horizon',
			'Our scientists specifically created these to specificaly target specific black holes in a specific dimension.',
			1,
			2,
			{
				base:'https://klattmose.github.io/CookieClicker/img/blackholeinverter',
				xV:8,
				yV:32,
				w:128,
				rows:1,
				x:0,
				y:0,
				customBuildingPic:'https://klattmose.github.io/CookieClicker/img/customBuildings.png',
				customIconsPic:iconsURL
			},
			"wow so specific!",
			function(me){
				var mult = 1;
				mult *= Game.GetTieredCpsMult(me);
				mult *= Game.magicCpS(me.name);
				return me.baseCps * mult;
			},
			function(){
				Game.UnlockTiered(this);
				if(this.amount >= Game.SpecialGrandmaUnlock && Game.Objects['Grandma'].amount > 0) Game.Unlock(this.grandma.name);
			},
			{
				name:'Hypnodrone',
				desc:'Autonomous aerial brand ambassadors to "encourage" more sales!',
				icon:1
			},
			['Kugelblitz', 'Spaghettification']
		);
		
		Game.Objects['White hole'].displayName='<span style="font-size:80%;position:relative;bottom:4px;">White hole</span>'; // Shrink the name since it's so large
		
		
		// Upgrades
		var last; var i = 0; var order = BlackholeInverter.getTieredUpgradeOrder();
		Game.TieredUpgrade('Whiter holes', '<q>Whiter then white!</q>', 'White hole', 1); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('More Mass', '<q>Big holes.</q>', 'White hole', 2); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Stronger Push', '<q>No enter.</q>', 'White hole', 3); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Dead Space', '<q>You stare into the abyss and the abyss stares back at you.</q>', 'BWhite hole', 4); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Cookiefication', '<q>Yum!</q>', 'Black hole inverter', 5); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Black Hole Inverters', '<q>How does this one even make sense?</q>', 'BWhite hole', 6); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Merging', '<q>Combine!</q>', 'White hole', 7); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Wormholes', '<q>You go in one end, you come out the other. Easy as that.</q>', 'White hole', 8); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Micro white holes', '<q>Tiny, but deadly.</q>', 'Black hole inverter', 9); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Radio-Rings', '<q>Insanely radioactive, and extremely deadly!</q>', 'White hole', 10); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Reality-Bending Holes', '<q>Now you can see how close you are to certain doom! Two of them put together!</q>', 'White hole', 11); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Moving White Holes', "<q>They can move now.</q>", 'White hole', 12); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Permanent Holes', "<q>They'll never disappear!</q>", 'White hole', 13); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('It has pockets!', "<q>Also known as a pants hole</q>", 'White hole', 14); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		order = BlackholeInverter.getGrandmaUpgradeOrder();
		last = Game.GrandmaSynergy('Heavy grandmas', 'A dense grandma to accrete more cookies.', 'White holer'); last.order = order;
		
		order = BlackholeInverter.getSynergyUpgradeOrder();
		last = Game.SynergyUpgrade('Oh look', "<q>Oh hey its where those special cookies are. WAIT.</q>", 'White hole', 'Shipment', 'synergy1'); last.icon[2] = iconsURL; last.order = order;
		last = Game.SynergyUpgrade('The pull', '<q>It pulls you, I push it.</q>', 'White hole', 'Time machine', 'synergy2'); last.icon[2] = iconsURL; last.order = order + 0.01;
		
		
		// Achievements
		order = BlackholeInverter.getAchievementOrder(); i = 0;
		last = Game.TieredAchievement('Its white!', '', 'White hole', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('I can\'t see!', '', 'White hole', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Schwarzschild', '', 'White hole', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Holes in holes', '', 'White hole', 4); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Cookie theorem', '', 'White hole', 5); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Photon sphere', '', 'White hole', 6); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Information paradox', '', 'White hole', 7); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Gravitaional pushing', '', 'White hole', 8); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Galactic nuclei', '', 'White hole', 9); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Sagittarius A*', '', 'White hole', 10); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Hey now, you\'ve got a lot o\' mass', '', 'White hole', 11); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Incredibly dense', '', 'White hole', 12); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Infinitely dense', '', 'White hole', 13); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Bottomless pit', '', 'White hole', 14); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		last = Game.ProductionAchievement('Relativistic jets', 'White hole', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Primordial white holes', 'White hole', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Naked singularity', 'White hole', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		last = CCSE.NewAchievement('M87', 'Reach level <b>10</b> black hole inverters.', [1, 26, iconsURL]); 
			Game.Objects['Black hole inverter'].levelAchiev10 = last; last.order = order + i / 100; i++;
		
		
		
		Game.customStatsMenu.push(function(){
			CCSE.AppendStatsVersionNumber(BlackholeInverter.name, BlackholeInverter.version);
		});
		
		// Finish up
		BlackholeInverter.isLoaded = 1;
		if(BlackholeInverter.postloadHooks){
			for(var i = 0; i < BlackholeInverter.postloadHooks.length; ++i) BlackholeInverter.postloadHooks[i]();
		}
		
		if (Game.prefs.popups) Game.Popup(BlackholeInverter.name + ' loaded!');
		else Game.Notify(BlackholeInverter.name + ' loaded!', '', '', 1, 1);
	}
	
	
	BlackholeInverter.getTieredUpgradeOrder = function(){
		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		
		var res = 0;
		for(var i = 0; i < Game.ObjectsN; i++){
			var me = Game.ObjectsById[i];
			for(var ii in me.tieredUpgrades){
				if(isNumber(ii)) res = Math.max(me.tieredUpgrades[ii].order, res);
			}
		}
		
		return res + 0.01;
	}
	
	BlackholeInverter.getGrandmaUpgradeOrder = function(){
		var res = 0;
		for(var i in Game.GrandmaSynergies){
			res = Math.max(Game.Upgrades[Game.GrandmaSynergies[i]].order, res);
		}
		
		return res + 0.01;
	}
	
	BlackholeInverter.getSynergyUpgradeOrder = function(){
		var res = 0;
		for(var i = 0; i < Game.ObjectsN; i++){
			var me = Game.ObjectsById[i];
			for(var ii in me.synergies){
				res = Math.max(me.synergies[ii].order, res);
			}
		}
		
		return res + 0.01;
	}
	
	BlackholeInverter.getAchievementOrder = function(){
		var res = 0;
		for(var i = 0; i < Game.ObjectsN-1; i++){
			var me = Game.ObjectsById[i];
			
			for(var ii in me.tieredAchievs){
				res = Math.max(me.tieredAchievs[ii].order, res);
			}
			
			for(var ii in me.productionAchievs){
				res = Math.max(me.productionAchievs[ii].achiev.order, res);
			}
			
			if(me.levelAchiev10) res = Math.max(me.levelAchiev10.order, res);
		}
		
		return res + 0.01;
	}
	
	
	ModLanguage('*',{
		
		"%1 white hole: [
			"%1 white hole",
			"%1 white holes"
		],
		"[White hole quote]Our scientists specifically created these to specificaly target specific black holes in a specific dimension.": "Our scientists specifically created these to specificaly target specific black holes in a specific dimension.",
		"[White hole business name]Hypnodrone": "Hypnodrone",
		'[White hole business quote]Autonomous aerial brand ambassadors to "encourage" more sales!': 'Autonomous aerial brand ambassadors to "encourage" more sales!',
		
	});
	
	if(CCSE.ConfirmGameVersion(BlackholeInverter.name, BlackholeInverter.version, BlackholeInverter.GameVersion)) BlackholeInverter.init();
}


if(!BlackholeInverter.isLoaded){
	if(CCSE && CCSE.isLoaded){
		BlackholeInverter.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(BlackholeInverter.launch);
	}
}
