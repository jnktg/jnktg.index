$(document).ready(() => {

//variables

	var $jr = $('.jnktgred');
	var $jb = $('.jnktgblue');

	var $glr = $('.galleryRED');
	var $cr = $('.comixRED');
	var $gmr = $('.gamesRED');
	var $sr = $('.storeRED');
	var $ar = $('.aboutRED');
	var $glb = $('.galleryBLUE');
	var $cb = $('.comixBLUE');
	var $gmb = $('.gamesBLUE');
	var $sb = $('.storeBLUE');
	var $ab = $('.aboutBLUE');
	var $lr = $('.listred');
	var $lb = $('.listblue');

	var $news = $('.news');
	var $nt = $('.newstext');

	var $gc = $('.gallerycontent')
	var $jfrm = $('.jnktgfaceREDM');
	var $jfbm = $('.jnktgfaceBLUEM');
	var $tvb = $('.tvbarsimg');
	var $stp = $('.storecontent');
	var $hh = $('.hhimg');
	var $rgb = $('.rgbimg');

    var $glp = $('.gallerypic');
    var $ver = $('.vertical');
    var $row1 = $('.row1');

    var $ow = $('#overwatch');
    var $clay = $('#claymore');
    var $cbb = $('#cowboybebop');
    var $elf = $('#elfenlied');
    var $pen = $('#pengin');
    var $pan = $('#panda');
    var $shi = $('#shirokuma');

    var $ww = $('#wagonwheels');
    var $sun = $('#sunburst');
    var $ftn = $('#fountain');
    var $sm = $('#spacemask');
    var $fm = $('#flowersmaybe');
    var $rgbp = $('#RGBPoster');
    var $bcc = $('#bccrew');

    var $cwc = $('#cwc');
    var $is = $('#indicascience');
    var $d1 = $('#design1');
    var $d2 = $('#design2');
    var $d3 = $('#design3');
    var $d4 = $('#design4');
    var $d5 = $('#dolphinsrobots');

    var $lu = $('#luna');
    var $cat = $('#cats');
    var $cathead = $('#cat');
    var $head = $('#openhead');
    var $sibr = $('#sisbro');
    var $ntb = $('#notebook');
    var $skb = $('#sketchbook');

    var owpicisopen = false;
    var cbbpicisopen = false;
    var panpicisopen = false;
    var penpicisopen = false;
    var shipicisopen = false;
    var elfpicisopen = false;
    var claypicisopen = false;

    var wwpicisopen = false;
    var sbpicisopen = false;
    var ftnpicisopen = false;
    var smpicisopen = false;
    var fmpicisopen = false;
    var rgbppicisopen = false;
    var bccpicisopen = false;

    var cwcpicisopen = false;
    var ispicisopen = false;
    var d1picisopen = false;
    var d2picisopen = false;
    var d3picisopen = false;
    var d4picisopen = false;
    var d5picisopen = false;

    var lupicisopen = false;
    var catpicisopen = false;
    var bropicisopen = false;
    var sibpicisopen = false;
    var sibrpicisopen = false;
    var ntbpicisopen = false;
    var skbpicisopen = false;

    var $cc = $('.comixcontent');
    var $cp = $('.comixpic');
	var $bbi = $('#bb');
	var $bbt = $('#bbtitle');
	var $bbd = $('#bbdesc');
	var $cw = $('#cw');
	var $cwt = $('#cwtitle');
	var $cwd = $('#cwdesc');
	var $dvr = $('#dvr');
	var $dvrt = $('#dvrtitle');
	var $dvrd = $('#dvrdesc');
	var $bci = $('#bc');
	var $bct = $('#bctitle');
	var $bcd = $('#bcdesc');

    var bbdescshort = "A tale of employment and collecting balls.";
    var bbdesclong = "jnktg's first foray into webcomix, the aptly titled <i>Ballboys</i> explores one of the oldest and most underappreciated professions in the world. Centred around a group of highschool students, some of whom dream of becoming professional tennis players, others just collecting their minimum wage cheques along with tennis balls, <i>Ballboys</i> asks the question 'How and why does one become a ballboy and how is this even a job anymore??' Whether they're cleaning up the local court on a Wednesday afternoon or partaking in a global competition, the ballboys will show you what it takes to become a member of their tribe.";
    var bcdescshort = "A saga spanning three cities and at least ten years.";
    var bcdesclong = "jnktg's <i>Booty City</i> is a celebration of what it means to be human. The crew is comprised of outcasts who fit right in in Booty City, an international hub of locals, tourists and expats, getting all mixed up in one another's lives. Pirate law rules here: corrupt beaurocrats in the back pocket of some of the most ruthless pitates the world has ever known. It's up to the crew to suss through all of their city's lies and cover-ups to get to the core of what is good and what is evil, what belongs and what doesn't. A battle is brewing and the first attacks have been launched, but from whom, and why?";
    var cwdescshort = "A look inside the mind and life of jnktg as he learns to cope with anxiety/depression.";
    var cwdesclong = "When everything falls apart, jnktg is forced to come to terms with his inner demons. This is the story of how one attempts to regain one's sanity in the wake of trauma. What is real when nothing makes sense? Does it matter? Do you try to go back to a time when everything had an air of normalcy, or do you trudge forward hoping to come out the other side in one piece? Take a journey to sanity with jnktg.";
    var dvrdescshort = "A post-apocalyptic war epic between dolphins and robots for supremacy over the remnants of Earth.";
    var dvrdesclong = "One thousand years from now the Earth has been submerged by polar melts and almost all traces of humans have vanished. Dolphins and porpoises rule the seas, with few others left to challenge their dominance, aside from humanity's last-standing legacy: the robots. Opting for aerial dominance, the robots survey the actions of the dolphins very closely, waiting for the perfect opportunity to strike. The story is told from both perspectives in an attempt to answer a simple question: can humanity exist without humans?";

    var bbpicisopen = false;
    var bcpicisopen = false;
    var cwpicisopen = false;
    var dvrpicisopen = false;

    var $gmc = $('.gamescontent');
    var $gmp = $('.gamespic');
    var $spr = $('#sprites');
    var $sprd = $('#spritesdesc');
    var $sprt = $('#spritestitle');
    var $caca = $('#catcafe');
    var $cacad = $('#catcafedesc');
    var $cacat = $('#catcafetitle');
    var $bs = $('#brossmash');
    var $bsd = $('#brossmashdesc');
    var $bst = $('#brossmashtitle');
    var $cmm = $('#comms');
    var $cmmd = $('#commsdesc');
    var $cmmt = $('#commstitle');
    var $twn = $('#town');
    var $twnd = $('#towndesc');
    var $twnt = $('#towntitle');
    var $snb = $('#sndbx');
    var $snbd = $('#sndbxdesc');
    var $snbt = $('#sndbxtitle');

    var sprdescshort = "An Adventure RPG featuring a colourful cast of characters forced to work through their differences to defeat a common evil.";
    var sprdesclong = "Ostensibly geared toward young people but with surprisingly mature plotlines, this rich, colourful world is inhabited by creatures and personalities of all types. You begin the story as whichever character you like, gradually meeting the whole cast as you progress through your journey. An adventure suitable for all ages.";
    var cacadescshort = "You play as a cat who owns and operates a cafe, which you can customize after leveling up and earning enough money.";
    var cacadesclong = "A cafe simulator starring cats as the owners, operators and customers of your entirely customizable and upgradeable cafe. Starting from the bottom, you work your way up from being a street cat slinging coffee in the alley, to a respectable businesscat and pillar of the cat community. Features intuitive controls and UI.";
    var bsdescshort = "Bros smash eachother and try to be the one that smashes the other one more than they themselves are smashed.";
    var bsdesclong = "This simple arena brawler comes with unlockable characters and a bold design. Do your best to be the bro who knocks the other bro off the arena's edge, while simultaneously trying not to be the bro who gets knocked off first!";
    var cmmdescshort = "An exploration of what communication is and how it shapes reality around us.";
    var cmmdesclong = "A meditative AI project designed to explore the modes and methods of communication at it's core. Each bubble contains a capsule which changes colour as it interacts with other capsules. Watch as each capsule vies for influence over the others, and listen to them sing in bizarre harmony as they chatter and chirp away.";
    var twndescshort = "A transit sim focused on exploring town using a plethora of vehicles and aparati.";
    var twndesclong = "An exploration game allowing for many different modes of transportation for traversing the town as you attune yourself to the scope and scale of your surroundings. Town is all about how we perceive space, how we claim ownership of it, and how we rise above its limitations.";
    var snbdescshort = "jnktg's sndbx virtual synthesizer and plaything.";
    var snbdesclong = "sndbx is a virtual gadget, built to look and feel fun and tactile. A combination synthesizer, sequencer, drum machine, oscillator and composer, sndbx allows you to create your own songs from scratch. Intuitive and easy to use, and complete with a built in tutorial";

    var sprpicisopen = false;
    var cacapicisopen = false;
    var bspicisopen = false;
    var cmmpicisopen = false;
    var twnpicisopen = false;
    var snbpicisopen = false;

    var $csr = $('#csr');
    var $csb = $('#csb');

    var $ac = $('.aboutcontent');
    var $ap = $('.aboutpic');
	var $me = $('#me');
	var $abt = $('#abouttitle');
	var $abd = $('#aboutdesc');
	var $cnt = $('#contact');
    var $f = $('.face');
	var $jfr = $('.jnktgfaceRED');
	var $jfb = $('.jnktgfaceBLUE');
	var $jsr = $('.jnktgsurpRED');
	var $jsb = $('.jnktgsurpBLUE');

	var home = true;
	var comix = false;
	var games = false;
	var gallery = false;
	var projects = false;
	var store = false;
	var about = false;

//conditions

	//load

		CloseGallery();
		CloseComix();
		CloseGames();
		CloseStore();
		CloseAbout();
		LoadHome();

	//home

			$jb.mouseover(()=>{
				if (home==true){
					jnkhovcentre();
				};
				if (home==false){
					jnkhovleft();
				};
			});


			$jb.mouseleave(()=>{
				if (home==true){
					jnkexitcentre();
				};
				if (home==false){
					jnkexitleft();
				};
			});


			$jb.click(()=>{
				CloseGallery();
				CloseComix();
				CloseGames();
				CloseStore();
				CloseAbout();
				LoadHome();
			});

	//gallery

			$glb.mouseover(()=>{
				if (home==true){
    				GalleryPreview();
				};
				if (home==false&&gallery==false){
					galhovleft();
				};
			});

			$glb.mouseleave(()=>{
				if (home==true){
    				GalleryExit();
				};
				if (home==false&&gallery==false){
					galexitleft();
				};
			});

			$glb.click(()=>{
				CloseComix();
				CloseGames();
				CloseStore();
				CloseAbout();
                GalleryExit();
				LoadGallery();
			});

            $ow.mouseover(()=>{
                if (owpicisopen == false&&home == false){
                    OWPicHov();
                };
            });

            $ow.mouseleave(()=>{
                if (owpicisopen == false&&home == false){
                    OWPicExit();
                };
            });

            $ow.click(()=>{
                if (owpicisopen == true){
                    OWPicExit();
                };
                if (gallery == true&&owpicisopen == false){
                    OWPicOpen();
                };
            });

            $cbb.mouseover(()=>{
                if (cbbpicisopen == false&&home == false){
                    CBBPicHov();
                };
            });

            $cbb.mouseleave(()=>{
                if (cbbpicisopen == false&&home == false){
                    CBBPicExit();
                };
            });

            $cbb.click(()=>{
                if (gallery == true){
                    CBBPicOpen();
                };
            });

            $pan.mouseover(()=>{
                if (panpicisopen == false&&home == false){
                    PanPicHov();
                };
            });

            $pan.mouseleave(()=>{
                if (panpicisopen == false&&home == false){
                    PanPicExit();
                };
            });

            $pan.click(()=>{
                if (gallery == true){
                    PanPicOpen();
                };
            });

            $pen.mouseover(()=>{
                if (penpicisopen == false&&home == false){
                    PenPicHov();
                };
            });

            $pen.mouseleave(()=>{
                if (penpicisopen == false&&home == false){
                    PenPicExit();
                };
            });

            $pen.click(()=>{
                if (gallery == true){
                    PenPicOpen();
                };
            });

            $shi.mouseover(()=>{
                if (shipicisopen == false&&home == false){
                    ShiPicHov();
                };
            });

            $shi.mouseleave(()=>{
                if (shipicisopen == false&&home == false){
                    ShiPicExit();
                };
            });

            $shi.click(()=>{
                if (gallery == true){
                    ShiPicOpen();
                };
            });

            $elf.mouseover(()=>{
                if (elfpicisopen == false&&home == false){
                    ElfPicHov();
                };
            });

            $elf.mouseleave(()=>{
                if (elfpicisopen == false&&home == false){
                    ElfPicExit();
                };
            });

            $elf.click(()=>{
                if (gallery == true){
                    ElfPicOpen();
                };
            });

            $clay.mouseover(()=>{
                if (claypicisopen == false&&home == false){
                    ClayPicHov();
                };
            });

            $clay.mouseleave(()=>{
                if (claypicisopen == false&&home == false){
                    ClayPicExit();
                };
            });

            $clay.click(()=>{
                if (gallery == true){
                    ClayPicOpen();
                };
            });

            $ww.mouseover(()=>{
                if (wwpicisopen == false&&home == false){
                    WWPicHov();
                };
            });

            $ww.mouseleave(()=>{
                if (wwpicisopen == false&&home == false){
                    WWPicExit();
                };
            });

            $ww.click(()=>{
                if (gallery == true){
                    WWPicOpen();
                };
            });

            $sun.mouseover(()=>{
                if (sbpicisopen == false&&home == false){
                    SBPicHov();
                };
            });

            $sun.mouseleave(()=>{
                if (sbpicisopen == false&&home == false){
                    SBPicExit();
                };
            });

            $sun.click(()=>{
                if (gallery == true){
                    SBPicOpen();
                };
            });

            $ftn.mouseover(()=>{
                if (ftnpicisopen == false&&home == false){
                    FtnPicHov();
                };
            });

            $ftn.mouseleave(()=>{
                if (ftnpicisopen == false&&home == false){
                    FtnPicExit();
                };
            });

            $ftn.click(()=>{
                if (gallery == true){
                    FtnPicOpen();
                };
            });

            $sm.mouseover(()=>{
                if (smpicisopen == false&&home == false){
                    SMPicHov();
                };
            });

            $sm.mouseleave(()=>{
                if (smpicisopen == false&&home == false){
                    SMPicExit();
                };
            });

            $sm.click(()=>{
                if (gallery == true){
                    SMPicOpen();
                };
            });

            $fm.mouseover(()=>{
                if (fmpicisopen == false&&home == false){
                    FMPicHov();
                };
            });

            $fm.mouseleave(()=>{
                if (fmpicisopen == false&&home == false){
                    FMPicExit();
                };
            });

            $fm.click(()=>{
                if (gallery == true){
                    FMPicOpen();
                };
            });

            $rgbp.mouseover(()=>{
                if (rgbppicisopen == false&&home == false){
                    RGBPPicHov();
                };
            });

            $rgbp.mouseleave(()=>{
                if (rgbppicisopen == false&&home == false){
                    RGBPPicExit();
                };
            });

            $rgbp.click(()=>{
                if (gallery == true){
                    RGBPPicOpen();
                };
            });

            $is.mouseover(()=>{
                if (ispicisopen == false&&home == false){
                    ISPicHov();
                };
            });

            $is.mouseleave(()=>{
                if (ispicisopen == false&&home == false){
                    ISPicExit();
                };
            });

            $is.click(()=>{
                if (gallery == true){
                    ISPicOpen();
                };
            });

            $d1.mouseover(()=>{
                if (d1picisopen == false&&home == false){
                    D1PicHov();
                };
            });

            $d1.mouseleave(()=>{
                if (d1picisopen == false&&home == false){
                    D1PicExit();
                };
            });

            $d1.click(()=>{
                if (gallery == true){
                    D1PicOpen();
                };
            });

            $d2.mouseover(()=>{
                if (d2picisopen == false&&home == false){
                    D2PicHov();
                };
            });

            $d2.mouseleave(()=>{
                if (d2picisopen == false&&home == false){
                    D2PicExit();
                };
            });

            $d2.click(()=>{
                if (gallery == true){
                    D2PicOpen();
                };
            });

            $d3.mouseover(()=>{
                if (d3picisopen == false&&home == false){
                    D3PicHov();
                };
            });

            $d3.mouseleave(()=>{
                if (d3picisopen == false&&home == false){
                    D3PicExit();
                };
            });

            $d3.click(()=>{
                if (gallery == true){
                    D3PicOpen();
                };
            });

            $d4.mouseover(()=>{
                if (d4picisopen == false&&home == false){
                    D4PicHov();
                };
            });

            $d4.mouseleave(()=>{
                if (d4picisopen == false&&home == false){
                    D4PicExit();
                };
            });

            $d4.click(()=>{
                if (gallery == true){
                    D4PicOpen();
                };
            });

            $d5.mouseover(()=>{
                if (d5picisopen == false&&home == false){
                    D5PicHov();
                };
            });

            $d5.mouseleave(()=>{
                if (d5picisopen == false&&home == false){
                    D5PicExit();
                };
            });

            $d5.click(()=>{
                if (gallery == true){
                    D5PicOpen();
                };
            });

            $lu.mouseover(()=>{
                if (lupicisopen == false&&home == false){
                    LuPicHov();
                };
            });

            $lu.mouseleave(()=>{
                if (lupicisopen == false&&home == false){
                    LuPicExit();
                };
            });

            $lu.click(()=>{
                if (gallery == true){
                    LuPicOpen();
                };
            });

            $cat.mouseover(()=>{
                if (catpicisopen == false&&home == false){
                    CatPicHov();
                };
            });

            $cat.mouseleave(()=>{
                if (catpicisopen == false&&home == false){
                    CatPicExit();
                };
            });

            $cat.click(()=>{
                if (gallery == true){
                    CatPicOpen();
                };
            });

            $cathead.mouseover(()=>{
                if (bropicisopen == false&&home == false){
                    BroPicHov();
                };
            });

            $cathead.mouseleave(()=>{
                if (bropicisopen == false&&home == false){
                    BroPicExit();
                };
            });

            $cathead.click(()=>{
                if (gallery == true){
                    BroPicOpen();
                };
            });

            $head.mouseover(()=>{
                if (sibpicisopen == false&&home == false){
                    SibPicHov();
                };
            });

            $head.mouseleave(()=>{
                if (sibpicisopen == false&&home == false){
                    SibPicExit();
                };
            });

            $head.click(()=>{
                if (gallery == true){
                    SibPicOpen();
                };
            });

            $sibr.mouseover(()=>{
                if (sibrpicisopen == false&&home == false){
                    SibrPicHov();
                };
            });

            $sibr.mouseleave(()=>{
                if (sibrpicisopen == false&&home == false){
                    SibrPicExit();
                };
            });

            $sibr.click(()=>{
                if (gallery == true){
                    SibrPicOpen();
                };
            });

            $ntb.mouseover(()=>{
                if (ntbpicisopen == false&&home == false){
                    NtbPicHov();
                };
            });

            $ntb.mouseleave(()=>{
                if (ntbpicisopen == false&&home == false){
                    NtbPicExit();
                };
            });

            $ntb.click(()=>{
                if (gallery == true){
                    NtbPicOpen();
                };
            });

            $skb.mouseover(()=>{
                if (skbpicisopen == false&&home == false){
                    SkbPicHov();
                };
            });

            $skb.mouseleave(()=>{
                if (skbpicisopen == false&&home == false){
                    SkbPicExit();
                };
            });

            $skb.click(()=>{
                if (gallery == true){
                    SkbPicOpen();
                };
            });

            $bcc.mouseover(()=>{
                if (bccpicisopen == false&&home == false){
                    BCCPicHov();
                };
            });

            $bcc.mouseleave(()=>{
                if (bccpicisopen == false&&home == false){
                    BCCPicExit();
                };
            });

            $bcc.click(()=>{
                if (gallery == true){
                    BCCPicOpen();
                };
            });

            $cwc.mouseover(()=>{
                if (cwcpicisopen == false&&home == false){
                    CWCPicHov();
                };
            });

            $cwc.mouseleave(()=>{
                if (cwcpicisopen == false&&home == false){
                    CWCPicExit();
                };
            });

            $cwc.click(()=>{
                if (gallery == true){
                    CWCPicOpen();
                };
            });

	//comix

			$cb.mouseover(()=>{
				if (home==true){
    				ComixPreview();
				};
				if (home==false&&comix==false){
					comhovleft();
				};
			});

			$cb.mouseleave(()=>{
				if (home==true){
    				ComixExit();
				};
				if (home==false&&comix==false){
					comexitleft();
				};
			});

			$cb.click(()=>{
				CloseGallery();
				CloseGames();
				CloseStore();
				CloseAbout();
                BCPicExit();
                BBPicExit();
                CWPicExit();
                DVRPicExit();
                ComixExit();
				LoadComix();
			});

            $bbi.mouseover(()=>{
                if (bbpicisopen == false&&home == false){
                    BBPicHov();
                };
            });

            $bbi.mouseleave(()=>{
                if (bbpicisopen == false&&home == false){
                    BBPicExit();
                };
            });

            $bbi.click(()=>{
                if (comix == true){
                    BCPicExit();
                    CWPicExit();
                    DVRPicExit();
                    BBPicOpen();
                };
            });

            $cw.mouseover(()=>{
                if (cwpicisopen == false&&home == false){
                    CWPicHov();
                };
            });

            $cw.mouseleave(()=>{
                if (cwpicisopen == false&&home == false){
                    CWPicExit();
                };
            });

            $cw.click(()=>{
                if (comix == true){
                    BCPicExit();
                    BBPicExit();
                    DVRPicExit();
                    CWPicOpen();
                };
            });

            $dvr.mouseover(()=>{
                if (dvrpicisopen == false&&home == false){
                    DVRPicHov();
                };
            });

            $dvr.mouseleave(()=>{
                if (dvrpicisopen == false&&home == false){
                    DVRPicExit();
                };
            });

            $dvr.click(()=>{
                if (comix == true){
                    BCPicExit();
                    CWPicExit();
                    BBPicExit();
                    DVRPicOpen();
                };
            });

            $bci.mouseover(()=>{
                if (bcpicisopen == false&&home == false){
                    BCPicHov();
                };
            });

            $bci.mouseleave(()=>{
                if (bcpicisopen == false&&home == false){
                    BCPicExit();
                };
            });

            $bci.click(()=>{
                if (comix == true){
                    BBPicExit();
                    CWPicExit();
                    DVRPicExit();
                    BCPicOpen();
                };
            });

	//games

			$gmb.mouseover(()=>{
				if (home==true){
    				GamesPreview();
				};
				if (home==false&&games==false){
					gamhovleft();
				};
			});

			$gmb.mouseleave(()=>{
				if (home==true){
    				GamesExit();
				};
				if (home==false&&games==false){
					gamexitleft();
				};
			});

			$gmb.click(()=>{
				CloseComix();
				CloseGallery();
				CloseStore();
				CloseAbout();
                SprPicExit();
                CCPicExit();
                BSPicExit();
                CmmPicExit();
                TownPicExit();
                SnbPicExit();
                GamesExit();
				LoadGames();
			});

            $spr.mouseover(()=>{
                if (sprpicisopen == false&&home == false){
                    SprPicHov();
                };
            });

            $spr.mouseleave(()=>{
                if (sprpicisopen == false&&home == false){
                    SprPicExit();
                };
            });

            $spr.click(()=>{
                if (games == true){
                    CCPicExit();
                    BSPicExit();
                    CmmPicExit();
                    TownPicExit();
                    SnbPicExit();
                    SprPicOpen();
                };
            });

            $caca.mouseover(()=>{
                if (cacapicisopen==false&&home == false){
                    CCPicHov();
                };
            });

            $caca.mouseleave(()=>{
                if (cacapicisopen==false&&home == false){
                    CCPicExit();
                };
            });

            $caca.click(()=>{
                if (games == true){
                    SprPicExit();
                    BSPicExit();
                    CmmPicExit();
                    TownPicExit();
                    SnbPicExit();
                    CCPicOpen();
                };
            });

            $bs.mouseover(()=>{
                if (bspicisopen==false&&home == false){
                    BSPicHov();
                };
            });

            $bs.mouseleave(()=>{
                if (bspicisopen==false&&home == false){
                    BSPicExit();
                };
            });

            $bs.click(()=>{
                if (games == true){
                    SprPicExit();
                    CCPicExit();
                    CmmPicExit();
                    TownPicExit();
                    SnbPicExit();
                    BSPicOpen();
                };
            });

            $cmm.mouseover(()=>{
                if (cmmpicisopen==false&&home == false){
                    CmmPicHov();
                };
            });

            $cmm.mouseleave(()=>{
                if (cmmpicisopen==false&&home == false){
                    CmmPicExit();
                };
            });

            $cmm.click(()=>{
                if (games == true){
                    SprPicExit();
                    CCPicExit();
                    BSPicExit();
                    TownPicExit();
                    SnbPicExit();
                    CmmPicOpen();
                };
            });

            $twn.mouseover(()=>{
                if (twnpicisopen==false&&home == false){
                    TownPicHov();
                };
            });

            $twn.mouseleave(()=>{
                if (twnpicisopen==false&&home == false){
                    TownPicExit();
                };
            });

            $twn.click(()=>{
                if (games == true){
                    SprPicExit();
                    CCPicExit();
                    CmmPicExit();
                    BSPicExit();
                    SnbPicExit();
                    TownPicOpen();
                };
            });

            $snb.mouseover(()=>{
                if (snbpicisopen==false&&home == false){
                    SnbPicHov();
                };
            });

            $snb.mouseleave(()=>{
                if (snbpicisopen==false&&home == false){
                    SnbPicExit();
                };
            });

            $snb.click(()=>{
                if (games == true){
                    SprPicExit();
                    CCPicExit();
                    CmmPicExit();
                    TownPicExit();
                    BSPicExit();
                    SnbPicOpen();
                };
            });

	//store

			$sb.mouseover(()=>{
				if (home==true){
    				StorePreview();
				};
				if (home==false&&store==false){
					strhovleft();
				};
			});

			$sb.mouseleave(()=>{
				if (home==true){
    				StoreExit();
				};
				if (home==false&&store==false){
					strexitleft();
				};
			});

			$csb.mouseenter(()=>{
				if (store==true){
       				CSBHov();
                };
			});

			$csb.mouseleave(()=>{
				if (store==true){
       				CSBExit();
                };
			});

			$sb.click(()=>{
				CloseComix();
				CloseGames();
				CloseGallery();
				CloseAbout();
                StoreExit();
				LoadStore();
			});

	//about

			$ab.mouseover(()=>{
				if (home==true){
    				AboutPreview();
				};
				if (home==false&&about==false){
					abhovleft();
				};
			});

			$ab.mouseleave(()=>{
				if (home==true){
    				AboutExit();
				};
				if (home==false&&about==false){
					abexitleft();
				};
			});

			$ab.click(()=>{
				CloseComix();
				CloseGames();
				CloseGallery();
				CloseStore();
                AboutExit();
				LoadAbout();
			});

			$cnt.mouseover(()=>{
                document.getElementById("show").innerHTML = "Contact";
			});
			$cnt.click(()=>{
                window.open('mailto:jnktg1@gmail.com?');
			});

			$jfb.mouseover(()=>{
				if (home==true){
    				AboutPreview();
				};
				if (home==false){
					abhovleft();
				};
			});

			$jfb.mouseleave(()=>{
				if (home==true){
    				AboutExit();
				};
				if (home==false){
					abexitleft();
				};
			});

			$jfb.click(()=>{
				CloseComix();
				CloseGames();
				CloseGallery();
				CloseStore();
                AboutExit();
				LoadAbout();
			});

//functions

	//home
		function LoadHome() {
			home = true;
			comix = false;	
			games = false;
			gallery = false;
			store = false;
			about = false;
			$jr.animate({
				opacity: '0.5',
				left: '50.25%',
				top: '15.25%',
				width: '25%',
				height: '25%',
			}, 150);
			$jb.animate({
				opacity: '0.5',
				left: '50%',
				top: '15%',
				width: '25%',
				height: '25%',
			}, 150);
			$lr.animate({
				opacity: '0.5',
				left: '5%',
			}, 150);
			$lb.animate({
				opacity: '0.5',
				left: '4.75%',
			}, 150);
			$glb.animate({
				top: '34.75%',
			}, 150);
			$glr.animate({
				top: '35%',
			}, 150);
			$glp.animate({
				width: '100px',
				height: '100px',
			}, 150);
			$gc.animate({
                top: '0%',
                left: '0%',
			}, 150);
			$cb.animate({
				top: '44.75%',
			}, 150);
			$cr.animate({
				top: '45%',
			}, 150);
			$cp.animate({
				width: '100px',
				height: '100px',
			}, 150);
			$cc.animate({
                top: '0%',
                left: '0%',
			}, 150);
			$gmb.animate({
				top: '54.75%',
			}, 150);
			$gmr.animate({
				top: '55%',
			}, 150);
			$gmp.animate({
				width: '100px',
				height: '100px',
			}, 150);
			$gmc.animate({
                top: '0%',
                left: '0%',
			}, 150);
			$sb.animate({
				top: '64.75%',
			}, 150);
			$sr.animate({
				top: '65%',
			}, 150);
			$ab.animate({
				top: '74.75%',
			}, 150);
			$ar.animate({
				top: '75%',
			}, 150);
			$news.animate({
				opacity: '1',
                top: '50%',
				height: '500px',
				width: '900px',
			}, 150);	
            $nt.animate({
	            top: '88%',
	            left: '57.5%',
                bottom: '5%',
                right: '25%',
            }, 150);
			$f.animate({
                width: '20%',
                height: '55%',
				top: '45%',
			},150);
			$jsb.animate({
				bottom: '6%',
				right: '6%',
				opacity: '0',
			},150);
			$jsr.animate({
				bottom: '5%',
				right: '5%',
				opacity: '0',
			},150);
            $jfb.animate({
				bottom: '6%',
				right: '6%',
				opacity: '0.5',
			},150);
			$jfr.animate({
				bottom: '5%',
				right: '5%',
				opacity: '0.5',
			},150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
		};

	function jnkhovcentre(){
		$jr.animate({
			left: '50.5%',
			top: '15.5%',
		}, 150);
		$jb.animate({
			left: '49.5%',
			top: '14.5%',
		}, 150);
	};

	function jnkexitcentre(){
		$jr.animate({
			left: '50.25%',
			top: '15.25%',
		}, 150);
		$jb.animate({
			left: '50%',
			top: '15%',
		}, 150);
	};

	function jnkhovleft(){
		$jr.animate({
			opacity: '0.75',
			left: '7.75%',
			top: '15.5%',
		}, 150);
		$jb.animate({
			left: '7%',
			top: '14.25%',
		}, 150);
	};

	function jnkexitleft(){
		$jr.animate({
			opacity: '0.75',
			left: '7.5%',
			top: '15%',
		}, 150);
		$jb.animate({
			left: '7.25%',
			top: '14.75%',
		}, 150);
	};

	//gallery
		function GalleryPreview() {
			$glb.animate({
				top: '34.5%',
				left: '4.5%',
			}, 150);
			$glr.animate({
				top: '35.5%',
				left: '5.5%',
			}, 150);
			$tvb.animate({
				opacity: '1',
			}, 150);	
			$gc.animate({
				opacity: '1',
			}, 150);
            document.getElementById("show").innerHTML = 'Gallery';
		};

		function GalleryExit() {
			$glb.animate({
				top: '34.75%',
				left: '4.75%',
			}, 150);
			$glr.animate({
				top: '35%',
				left: '5%',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
			$gc.animate({
				opacity: '0',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
		};

	    function galhovleft(){
			$glb.animate({
				opacity: '0.5',
				top: '34.5%',
				left: '-5.5%',
			}, 150);
			$glr.animate({
				opacity: '0.75',
				top: '35.5%',
				left: '-4.5%',
			}, 150);
            document.getElementById("show").innerHTML = 'Gallery';
	    };

	    function galexitleft(){
			$glb.animate({
				opacity: '0.5',
				top: '34.75%',
				left: '-5%',
			}, 150);
			$glr.animate({
				opacity: '0.75',
				top: '35%',
				left: '-4.75%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
        };

		function LoadGallery() {
			home = false;	
			gallery = true;
			comix = false;
			games = false;
			store = false;
			about = false;
			$jr.animate({
				opacity: '0.75',
				width: '20%',
				height: '20%',
				left: '7.5%',
				top: '15%',
			}, 150);
			$jb.animate({
				width: '20%',
				height: '20%',
				left: '7.25%',
				top: '14.75%',
			}, 150);
			$lb.animate({
				opacity: '0.5',
				left: '-5%',
			}, 150);
			$lr.animate({
				opacity: '0.75',
				left: '-4.75%',
			}, 150);
			$glb.animate({
				opacity: '0.75',
				top: '34.75%',
				left: '-5%',
			}, 150);
			$glr.animate({
				opacity: '0.75',
				top: '35%',
				left: '-4.75%',
			}, 150);
			$tvb.animate({
				opacity: '1',
			}, 150);
			$news.animate({
                top: '50%',
                left: '50%',
				width: '1280px',
				height: '720px',
			}, 150);
			$glp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$gc.animate({
                top: '0%',
                left: '0%',
				opacity: '1',
			}, 150);
            $f.animate({
                width: '15%',
                height: '40%',
				top: '0.5%',
			},150);
            $jfb.animate({
				bottom: '5%',
			},150);
			$jfr.animate({
				bottom: '6%',
			},150);
            $jsb.animate({
				bottom: '5%',
			},150);
			$jsr.animate({
				bottom: '6%',
			},150);
			$nt.animate({
				top: '5%',
				left: '50%',
			},150);
            document.getElementById("show").innerHTML = 'Gallery';
            document.getElementById("gallerycontent").style.zIndex = '4';
			return;
		};

        function OWPicHov() {
			$ow.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function OWPicExit() {
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            owpicisopen = false;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function OWPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);
			$gc.animate({
                top: '-19%',
                left: '30%',
			}, 150);            
			$ow.animate({
				width: '700px',
				height: '870px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            owpicisopen = true;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function CBBPicHov() {
			$cbb.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function CBBPicExit() {
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CBBPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '-31%',
			}, 150);            
			$cbb.animate({
                top: '0%',
				width: '1300px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            cbbpicisopen = true;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function PanPicHov() {
			$pan.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function PanPicExit() {
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function PanPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '0%',
			}, 150);            
			$pan.animate({
                top: '0%',
				width: '650px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            panpicisopen = true;
            cbbpicisopen = false;
            owpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function PenPicHov() {
			$pen.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function PenPicExit() {
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function PenPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '10%',
			}, 150);            
			$pen.animate({
                top: '0%',
				width: '650px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            penpicisopen = true;
            cbbpicisopen = false;
            panpicisopen = false;
            owpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function ShiPicHov() {
			$shi.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function ShiPicExit() {
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function ShiPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '-10%',
			}, 150);            
			$shi.animate({
                top: '0%',
				width: '650px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            shipicisopen = true;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            cbbpicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function BCCPicHov() {
			$bcc.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function BCCPicExit() {
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function BCCPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-19%',
                left: '-11%',
			}, 150);            
			$bcc.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            shipicisopen = false;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            cbbpicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            bccpicisopen = true;
            cwcpicisopen = false;
        };

        function CWCPicHov() {
			$cwc.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "pen & marker collage";
        };

        function CWCPicExit() {
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CWCPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '7.5%',
			}, 150);            
			$cwc.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            shipicisopen = false;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            cbbpicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            bccpicisopen = false;
            cwcpicisopen = true;
        };

        function ElfPicHov() {
			$elf.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function ElfPicExit() {
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function ElfPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '-12%',
			}, 150);            
			$elf.animate({
                top: '0%',
				width: '1250px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            elfpicisopen = true;
            cbbpicisopen = false;
            owpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            panpicisopen = false;
            claypicisopen = false;
        };

        function ClayPicHov() {
			$clay.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function ClayPicExit() {
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function ClayPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '-30%',
			}, 150);            
			$clay.animate({
                top: '0%',
				width: '700px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            claypicisopen = true;
            cbbpicisopen = false;
            panpicisopen = false;
            owpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            penpicisopen = false;
        };

        function WWPicHov() {
			$ww.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function WWPicExit() {
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function WWPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-19%',
                left: '16%',
			}, 150);            
			$ww.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            wwpicisopen = true;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function SBPicHov() {
			$sun.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "mobile app";
        };

        function SBPicExit() {
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SBPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '-28%',
			}, 150);            
			$sun.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            sbpicisopen = true;
            wwpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function FtnPicHov() {
			$ftn.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function FtnPicExit() {
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function FtnPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-19%',
                left: '-28%',
			}, 150);            
			$ftn.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            ftnpicisopen = true;
            wwpicisopen = false;
            sunpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function SMPicHov() {
			$sm.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "mobile app";
        };

        function SMPicExit() {
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SMPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '-23%',
			}, 150);            
			$sm.animate({
				width: '1350px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            smpicisopen = true;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function FMPicHov() {
			$fm.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "computer program";
        };

        function FMPicExit() {
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function FMPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '-28%',
			}, 150);            
			$fm.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            fmpicisopen = true;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            rgbppicisopen = false;
        };

        function RGBPPicHov() {
			$rgbp.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function RGBPPicExit() {
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function RGBPPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-18%',
                left: '-1.5%',
			}, 150);            
			$rgbp.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            rgbppicisopen = true;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
        };

        function ISPicHov() {
			$is.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector logos";
        };

        function ISPicExit() {
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function ISPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '26%',
			}, 150);            
			$is.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = true;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function D1PicHov() {
			$d1.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "pencil";
        };

        function D1PicExit() {
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function D1PicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '-13%',
			}, 150);            
			$d1.animate({
				width: '1300px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = true;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            cbbpicisopen = false;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function D2PicHov() {
			$d2.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "pen/pencil";
        };

        function D2PicExit() {
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function D2PicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '-29.5%',
			}, 150);            
			$d2.animate({
				width: '1250px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = true;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            panpicisopen = false;
            cbbpicisopen = false;
            owpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function D3PicHov() {
			$d3.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "coloured ink collage";
        };

        function D3PicExit() {
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function D3PicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '17%',
			}, 150);            
			$d3.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = true;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            penpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            owpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function D4PicHov() {
			$d4.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function D4PicExit() {
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function D4PicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-19%',
                left: '-27%',
			}, 150);            
			$d4.animate({
				width: '1150px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = true;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            shipicisopen = false;
            owpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            cbbpicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
        };

        function D5PicHov() {
			$d5.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function D5PicExit() {
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function D5PicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-19%',
                left: '-2.5%',
			}, 150);            
			$d5.animate({
				width: '1250px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = true;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            elfpicisopen = false;
            cbbpicisopen = false;
            owpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            panpicisopen = false;
            claypicisopen = false;
        };

        function LuPicHov() {
			$lu.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "watercolour";
        };

        function LuPicExit() {
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function LuPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '30%',
			}, 150);            
			$lu.animate({
 				width: '700px',
				height: '870px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = true;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
            claypicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            owpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            penpicisopen = false;
        };

        function CatPicHov() {
			$cat.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "watercolour/marker";
        };

        function CatPicExit() {
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CatPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '-10%',
			}, 150);            
			$cat.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = true;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function BroPicHov() {
			$cathead.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function BroPicExit() {
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function BroPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '-19%',
			}, 150);            
			$cathead.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = true;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            sbpicisopen = false;
            wwpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function SibPicHov() {
			$head.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "pen";
        };

        function SibPicExit() {
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SibPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '0%',
                left: '18.5%',
			}, 150);            
			$head.animate({
				width: '800px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = true;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            ftnpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function SibrPicHov() {
			$sibr.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function SibrPicExit() {
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SibrPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-37.5%',
                left: '25.5%',
			}, 150);            
			$sibr.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = true;
            ntbpicisopen = false;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            smpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            fmpicisopen = false;
            rgbppicisopen = false;
        };

        function NtbPicHov() {
			$ntb.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "vector image";
        };

        function NtbPicExit() {
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function NtbPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '7.5%',
			}, 150);            
			$ntb.animate({
				width: '870px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = true;
            skbpicisopen = false;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            fmpicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            rgbppicisopen = false;
        };

        function SkbPicHov() {
			$skb.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            document.getElementById("show").innerHTML = "coloured pencil";
        };

        function SkbPicExit() {
			$skb.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SkbPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gc.animate({
                top: '-56.5%',
                left: '20%',
			}, 150);            
			$skb.animate({
				width: '700px',
				height: '870px',
			}, 150);
			$ww.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sun.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ftn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$fm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ow.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cbb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pan.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$pen.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$shi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$elf.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$clay.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$is.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d1.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d2.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d3.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d4.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$d5.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$lu.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cat.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cathead.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$head.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$sibr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$ntb.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$rgbp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bcc.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cwc.animate({
				width: '150px',
				height: '150px',
			}, 150);
            bccpicisopen = false;
            cwcpicisopen = false;
            ispicisopen = false;
            d1picisopen = false;
            d2picisopen = false;
            d3picisopen = false;
            d4picisopen = false;
            d5picisopen = false;
            lupicisopen = false;
            catpicisopen = false;
            bropicisopen = false;
            sibpicisopen = false;
            sibrpicisopen = false;
            ntbpicisopen = false;
            skbpicisopen = true;
            owpicisopen = false;
            cbbpicisopen = false;
            panpicisopen = false;
            penpicisopen = false;
            shipicisopen = false;
            elfpicisopen = false;
            claypicisopen = false;
            rgbppicisopen = false;
            wwpicisopen = false;
            sunpicisopen = false;
            ftnpicisopen = false;
            smpicisopen = false;
            fmpicisopen = false;
        };

		function CloseGallery() {
			home = false;	
			gallery = false;
			comix = false;
			games = false;
			store = false;
			about = false;
			$gc.animate({
				opacity: '0',
				top: '5%',
				left: '5%',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("gallerycontent").style.zIndex = '1';
			return;
		};

	//comix
		function ComixPreview() {
			$cb.animate({
				top: '44.5%',
				left: '4.5%',
			}, 150);
			$cr.animate({
				top: '45.5%',
				left: '5.5%',
			}, 150);
			$cc.animate({
				opacity: '1',
			}, 150);
			$tvb.animate({
				opacity: '1',
			}, 150);
            document.getElementById("show").innerHTML = "Comix";
		};

		function ComixExit() {
			$cb.animate({
				top: '44.75%',
				left: '4.75%',
			}, 150);
			$cr.animate({
				top: '45%',
				left: '5%',
			}, 150);
			$cc.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
		};

	    function comhovleft(){
			$cb.animate({
				opacity: '0.5',
				top: '44.5%',
				left: '-5.5%',
			}, 150);
			$cr.animate({
				opacity: '0.75',
				top: '45.5%',
				left: '-4.5%',
			}, 150);
            document.getElementById("show").innerHTML = "Comix";
	    };

	    function comexitleft(){
			$cb.animate({
				opacity: '0.5',
				top: '44.75%',
				left: '-5%',
			}, 150);
			$cr.animate({
				opacity: '0.75',
				top: '45%',
				left: '-4.75%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
        };

		function LoadComix() {
			comix = true;
			home = false;	
			games = false;
			gallery = false;
			store = false;
			about = false;
			$jr.animate({
				opacity: '0.75',
				width: '20%',
				height: '20%',
				left: '7.5%',
				top: '15%',
			}, 150);
			$jb.animate({
				width: '20%',
				height: '20%',
				left: '7.25%',
				top: '14.75%',
			}, 150);
			$lb.animate({
				opacity: '0.5',
				left: '-5%',
			}, 150);
			$lr.animate({
				opacity: '0.75',
				left: '-4.75%',
			}, 150);
			$cb.animate({
				opacity: '0.75',
				top: '44.75%',
				left: '-5%',
			}, 150);
			$cr.animate({
				opacity: '0.75',
				top: '45%',
				left: '-4.75%',
			}, 150);
			$news.animate({
                top: '50%',
                left: '50%',
				width: '1280px',
				height: '720px',
			}, 150);
			$cc.animate({
                top: '0%',
                left: '0%',
				opacity: '1',
			}, 150);
			$cp.animate({
				width: '150px',
				height: '150px',
			}, 150);
            $f.animate({
                width: '15%',
                height: '40%',
				top: '0.5%',
			},150);
            $jfb.animate({
				bottom: '5%',
			},150);
			$jfr.animate({
				bottom: '6%',
			},150);
            $jsb.animate({
				bottom: '5%',
			},150);
			$jsr.animate({
				bottom: '6%',
			},150);
			$nt.animate({
				top: '5%',
				left: '50%',
			},150);
			$tvb.animate({
				opacity: '1',
			}, 150);
            bbpicisopen = false;
            bcpicisopen = false;
            cwpicisopen = false;
            dvrpicisopen = false;
            document.getElementById("show").innerHTML = "Comix";
            document.getElementById("comixcontent").style.zIndex = '4';
		};


        function BBPicHov() {
			$bbi.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $bbd.animate({
                opacity: '1',
            }, 150);      
            $bbt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("show").innerHTML = "Ballboys";
            document.getElementById("bbdesc").innerHTML = bbdescshort;
        };

        function BBPicExit() {
			$bbi.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $bbd.animate({
                opacity: '0',
            }, 150);      
            $bbt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("show").innerHTML = "what's playing?";
            document.getElementById("bbdesc").innerHTML = bbdescshort;
        };

        function BBPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$cc.animate({
                top: '0%',
                left: '-30%',
			}, 150);            
			$bbi.animate({
				width: '500px',
				height: '300px',
			}, 150);
			$bci.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cw.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$dvr.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("bbdesc").innerHTML = bbdesclong;
            bbpicisopen = true;
            bcpicisopen = false;
            cwpicisopen = false;
            dvrpicisopen = false;
        };

        function CWPicHov() {
			$cw.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $cwd.animate({
                opacity: '1',
            }, 150);      
            $cwt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("cwdesc").innerHTML = cwdescshort;
            document.getElementById("show").innerHTML = "Content Warning";
        };

        function CWPicExit() {
			$cw.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $cwd.animate({
                opacity: '0',
            }, 150);      
            $cwt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("cwdesc").innerHTML = cwdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CWPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$cc.animate({
                top: '0%',
                left: '12%',
			}, 150);            
			$cw.animate({
				width: '400px',
				height: '400px',
			}, 150);
			$bci.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bbi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$dvr.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("cwdesc").innerHTML = cwdesclong;
            bbpicisopen = false;
            bcpicisopen = false;
            cwpicisopen = true;
            dvrpicisopen = false;
        };

        function DVRPicHov() {
			$dvr.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $dvrd.animate({
                opacity: '1',
            }, 150);      
            $dvrt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("dvrdesc").innerHTML = dvrdescshort;
            document.getElementById("show").innerHTML = "Dolphins vs. Robots";
        };

        function DVRPicExit() {
			$dvr.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $dvrd.animate({
                opacity: '0',
            }, 150);      
            $dvrt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("dvrdesc").innerHTML = dvrdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function DVRPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$cc.animate({
                top: '0%',
                left: '-10%',
			}, 150);            
			$dvr.animate({
				width: '500px',
				height: '300px',
			}, 150);
			$bci.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cw.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bbi.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("dvrdesc").innerHTML = dvrdesclong;
            bbpicisopen = false;
            bcpicisopen = false;
            cwpicisopen = false;
            dvrpicisopen = true;
        };

        function BCPicHov() {
			$bci.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $bcd.animate({
                opacity: '1',
            }, 150);      
            $bct.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("bcdesc").innerHTML = bcdescshort;
            document.getElementById("show").innerHTML = "Booty City";
        };

        function BCPicExit() {
			$bci.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $bcd.animate({
                opacity: '0',
            }, 150);      
            $bct.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("bcdesc").innerHTML = bcdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function BCPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$cc.animate({
                top: '0%',
                left: '33%',
			}, 150);            
			$bci.animate({
				width: '400px',
				height: '400px',
			}, 150);
			$bbi.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cw.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$dvr.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("bcdesc").innerHTML = bcdesclong;
            bbpicisopen = false;
            bcpicisopen = true;
            cwpicisopen = false;
            dvrpicisopen = false;
        };

		function CloseComix() {
			comix = false;
			home = false;	
			games = false;
			gallery = false;
			store = false;
			about = false;
			$cc.animate({
				opacity: '0',
			}, 150);
			$bcd.animate({
				opacity: '0',
			}, 150);
			$cwd.animate({
				opacity: '0',
			}, 150);
			$bbd.animate({
				opacity: '0',
			}, 150);
			$dvrd.animate({
				opacity: '0',
			}, 150);
			$bct.animate({
				opacity: '0',
			}, 150);
			$cwt.animate({
				opacity: '0',
			}, 150);
			$bbt.animate({
				opacity: '0',
			}, 150);
			$dvrt.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            bbpicisopen = false;
            bcpicisopen = false;
            cwpicisopen = false;
            dvrpicisopen = false;
            document.getElementById("comixcontent").style.zIndex = '1';
		};

	//games
		function GamesPreview() {
			$gmb.animate({
				top: '54.5%',
				left: '4.5%',
			}, 150);
			$gmr.animate({
				top: '55.5%',
				left: '5.5%',
			}, 150);
			$gmc.animate({
				opacity: '1',
			}, 150);
			$tvb.animate({
				opacity: '1',
			}, 150);	
            document.getElementById("show").innerHTML = "Games";
		};

		function GamesExit() {
			$gmb.animate({
				top: '54.75%',
				left: '4.75%',
			}, 150);
			$gmr.animate({
				top: '55%',
				left: '5%',
			}, 150);
			$gmc.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);	
            document.getElementById("show").innerHTML = "what's playing?";
		};

	    function gamhovleft(){
			$gmb.animate({
				opacity: '0.5',
				top: '54.5%',
				left: '-5.5%',
			}, 150);
			$gmr.animate({
				opacity: '0.75',
				top: '55.5%',
				left: '-4.5%',
			}, 150);
            document.getElementById("show").innerHTML = "Games";
	    };

	    function gamexitleft(){
			$gmb.animate({
				opacity: '0.5',
				top: '54.75%',
				left: '-5%',
			}, 150);
			$gmr.animate({
				opacity: '0.75',
				top: '55%',
				left: '-4.75%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
        };

		function LoadGames() {
			home = false;	
			comix = false;
			games = true;
			gallery = false;
			store = false;
			about = false;
			$jr.animate({
				opacity: '0.75',
				width: '20%',
				height: '20%',
				left: '7.5%',
				top: '15%',
			}, 150);
			$jb.animate({
				width: '20%',
				height: '20%',
				left: '7.25%',
				top: '14.75%',
			}, 150);
			$lb.animate({
				opacity: '0.5',
				left: '-5%',
			}, 150);
			$lr.animate({
				opacity: '0.75',
				left: '-4.75%',
			}, 150);
			$gmb.animate({
				opacity: '0.75',
				top: '54.75%',
				left: '-5%',
			}, 150);
			$gmr.animate({
				opacity: '0.75',
				top: '55%',
				left: '-4.75%',
			}, 150);
			$gmc.animate({
                top: '0%',
                left: '0%',
				opacity: '1',
			}, 150);
			$gmp.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$tvb.animate({
				opacity: '1',
			}, 150);
			$news.animate({
                top: '50%',
                left: '50%',
				width: '1280px',
				height: '720px',
			}, 150);
            $f.animate({
                width: '15%',
                height: '40%',
				top: '0.5%',
			},150);
            $jfb.animate({
				bottom: '5%',
			},150);
			$jfr.animate({
				bottom: '6%',
			},150);
            $jsb.animate({
				bottom: '5%',
			},150);
			$jsr.animate({
				bottom: '6%',
			},150);
			$nt.animate({
				top: '5%',
				left: '50%',
			},150);
            cacapicisopen = false;
            sprpicisopen = false;
            bspicisopen = false;
            cmmpicisopen = false;
            twnpicisopen = false;
            snbpicisopen = false;
            document.getElementById("show").innerHTML = "Games";
            document.getElementById("gamescontent").style.zIndex = '4';
			return;
		};

        function SprPicHov() {
			$spr.animate({
				width: '200px',
				height: '200px',
			}, 150);      
            $sprd.animate({
                opacity: '1',
            }, 150);      
            $sprt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("spritesdesc").innerHTML = sprdescshort;
            document.getElementById("show").innerHTML = "Project: Forlorps";
        };

        function SprPicExit() {
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $sprd.animate({
                opacity: '0',
            }, 150);      
            $sprt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("spritesdesc").innerHTML = sprdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SprPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '36%',
			}, 150);            
			$spr.animate({
				width: '400px',
				height: '400px',
			}, 150);
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("spritesdesc").innerHTML = sprdesclong;
            cacapicisopen = false;
            sprpicisopen = true;
            bspicisopen = false;
            cmmpicisopen = false;
            twnpicisopen = false;
            snbpicisopen = false;
        };

        function CCPicHov() {
			$caca.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $cacad.animate({
                opacity: '1',
            }, 150);      
            $cacat.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("catcafedesc").innerHTML = cacadescshort;
            document.getElementById("show").innerHTML = "CatCafe";
        };

        function CCPicExit() {
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $cacad.animate({
                opacity: '0',
            }, 150);      
            $cacat.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("catcafedesc").innerHTML = cacadescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CCPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '22%',
			}, 150);            
			$caca.animate({
				width: '400px',
				height: '400px',
			}, 150);
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("catcafedesc").innerHTML = cacadesclong;
            cacapicisopen = true;
            sprpicisopen = false;
            bspicisopen = false;
            cmmpicisopen = false;
            twnpicisopen = false;
            snbpicisopen = false;
        };

        function BSPicHov() {
			$bs.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $bsd.animate({
                opacity: '1',
            }, 150);      
            $bst.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("brossmashdesc").innerHTML = bsdescshort;
            document.getElementById("show").innerHTML = "Bros Smash";
        };

        function BSPicExit() {
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $bsd.animate({
                opacity: '0',
            }, 150);      
            $bst.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("brossmashdesc").innerHTML = bsdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function BSPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '7%',
			}, 150);            
			$bs.animate({
				width: '500px',
				height: '300px',
			}, 150);
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("brossmashdesc").innerHTML = bsdesclong;
            bspicisopen = true;
            sprpicisopen = false;
            cacapicisopen = false;
            cmmpicisopen = false;
            twnpicisopen = false;
            snbpicisopen = false;
        };

        function CmmPicHov() {
			$cmm.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $cmmd.animate({
                opacity: '1',
            }, 150);      
            $cmmt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("commsdesc").innerHTML = cmmdescshort;
            document.getElementById("show").innerHTML = "Comms";
        };

        function CmmPicExit() {
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $cmmd.animate({
                opacity: '0',
            }, 150);      
            $cmmt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("commsdesc").innerHTML = cmmdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function CmmPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '-7%',
			}, 150);            
			$cmm.animate({
				width: '500px',
				height: '300px',
			}, 150);
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("commsdesc").innerHTML = cmmdesclong;
            cmmpicisopen = true;
            sprpicisopen = false;
            bspicisopen = false;
            twnpicisopen = false;
            cacapicisopen = false;
            snbpicisopen = false;
        };

        function TownPicHov() {
			$twn.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $twnd.animate({
                opacity: '1',
            }, 150);      
            $twnt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("towndesc").innerHTML = twndescshort;
            document.getElementById("show").innerHTML = "Town";
        };

        function TownPicExit() {
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $twnd.animate({
                opacity: '0',
            }, 150);      
            $twnt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("towndesc").innerHTML = twndescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function TownPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '-24%',
			}, 150);            
			$twn.animate({
				width: '250px',
				height: '400px',
			}, 150);
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("towndesc").innerHTML = twndesclong;
            twnpicisopen = true;
            sprpicisopen = false;
            bspicisopen = false;
            cmmpicisopen = false;
            cacapicisopen = false;
            snbpicisopen = false;
        };

        function SnbPicHov() {
			$snb.animate({
				width: '200px',
				height: '200px',
			}, 150);            
            $snbd.animate({
                opacity: '1',
            }, 150);      
            $snbt.animate({
                opacity: '1',
            }, 150);      
            document.getElementById("sndbxdesc").innerHTML = snbdescshort;
            document.getElementById("show").innerHTML = "sndbx";
        };

        function SnbPicExit() {
			$snb.animate({
				width: '150px',
				height: '150px',
			}, 150);            
            $snbd.animate({
                opacity: '0',
            }, 150);      
            $snbt.animate({
                opacity: '0',
            }, 150);      
            document.getElementById("sndbxdesc").innerHTML = snbdescshort;
            document.getElementById("show").innerHTML = "what's playing?";
        };

        function SnbPicOpen() {
			$news.animate({
                top: '35%',
                left: '50%',
				width: '95%',
				height: '95%',
			}, 150);            
			$gmc.animate({
                top: '0%',
                left: '-34%',
			}, 150);            
			$snb.animate({
				width: '500px',
				height: '300px',
			}, 150);
			$spr.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$bs.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$cmm.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$caca.animate({
				width: '150px',
				height: '150px',
			}, 150);
			$twn.animate({
				width: '150px',
				height: '150px',
			}, 150);
            document.getElementById("sndbxdesc").innerHTML = snbdesclong;
            snbpicisopen = true;
            sprpicisopen = false;
            bspicisopen = false;
            cmmpicisopen = false;
            cacapicisopen = false;
            twnpicisopen = false;
        };

		function CloseGames() {
			comix = false;
			home = false;	
			games = false;
			gallery = false;
			store = false;
			about = false;
			$gmc.animate({
				opacity: '0',
			}, 150);
			$sprd.animate({
				opacity: '0',
			}, 150);
			$cacad.animate({
				opacity: '0',
			}, 150);
			$bsd.animate({
				opacity: '0',
			}, 150);
			$cmmd.animate({
				opacity: '0',
			}, 150);
			$twnd.animate({
				opacity: '0',
			}, 150);
			$snbd.animate({
				opacity: '0',
			}, 150);
			$sprt.animate({
				opacity: '0',
			}, 150);
			$cacat.animate({
				opacity: '0',
			}, 150);
			$bst.animate({
				opacity: '0',
			}, 150);
			$cmmt.animate({
				opacity: '0',
			}, 150);
			$twnt.animate({
				opacity: '0',
			}, 150);
			$snbt.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            bbpicisopen = false;
            bcpicisopen = false;
            cwpicisopen = false;
            dvrpicisopen = false;
            document.getElementById("gamescontent").style.zIndex = '1';
		};

	//store
		function StorePreview() {
			$sb.animate({
				top: '64.5%',
				left: '4.5%',
			}, 150);
			$sr.animate({
				top: '65.5%',
				left: '5.5%',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);	
			$csr.animate({
				opacity: '0.5',
				top: '0.5%',
				left: '0.5%',
			}, 150);
    		$csb.animate({
				opacity: '0.5',
				top: '-0.5%',
				left: '-0.5%',
			}, 150);
    		$stp.animate({
				opacity: '1',
			}, 150);
            document.getElementById("show").innerHTML = "Store";
		};

		function StoreExit() {
			$sb.animate({
				top: '64.75%',
				left: '4.75%',
			}, 150);
			$sr.animate({
				top: '65%',
				left: '5%',
			}, 150);
			$csr.animate({
				opacity: '0',
			}, 150);
    		$csb.animate({
				opacity: '0',
			}, 150);
    		$stp.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
		};

	    function strhovleft(){
			$sb.animate({
				opacity: '0.5',
				top: '64.5%',
				left: '-5.5%',
			}, 150);
			$sr.animate({
				opacity: '0.75',
				top: '65.5%',
				left: '-4.5%',
			}, 150);
            document.getElementById("show").innerHTML = "Store";
	    };

	    function strexitleft(){
			$sb.animate({
				opacity: '0.5',
				top: '64.75%',
				left: '-5%',
			}, 150);
			$sr.animate({
				opacity: '0.75',
				top: '65%',
				left: '-4.75%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
        };

	    function CSBHov(){
			$csr.animate({
				opacity: '0.75',
				top: '2.5%',
				left: '2.5%',
			}, 150);
    		$csb.animate({
				opacity: '0.75',
				top: '-2.5%',
				left: '-2.5%',
			}, 150);
            document.getElementById("show").innerHTML = "Coming Soon!";
	    };

	    function CSBExit(){
			$csr.animate({
				opacity: '0.5',
				top: '0.5%',
				left: '0.5%',
			}, 150);
    		$csb.animate({
				opacity: '0.5',
				top: '-0.5%',
				left: '-0.5%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
	    };

		function LoadStore() {
			home = false;	
			comix = false;
			games = false;
			gallery = false;
			store = true;
			about = false;
			$jr.animate({
				opacity: '0.75',
				width: '20%',
				height: '20%',
				left: '7.5%',
				top: '15%',
			}, 150);
			$jb.animate({
				width: '20%',
				height: '20%',
				left: '7.25%',
				top: '14.75%',
			}, 150);
			$lb.animate({
				opacity: '0.5',
				left: '-5%',
			}, 150);
			$lr.animate({
				opacity: '0.75',
				left: '-4.75%',
			}, 150);
			$sb.animate({
				opacity: '0.75',
				top: '64.75%',
				left: '-5%',
			}, 150);
			$sr.animate({
				opacity: '0.75',
				top: '65%',
				left: '-4.75%',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
			$csr.animate({
				opacity: '0.5',
				top: '0.5%',
				left: '0.5%',
			}, 150);
    		$csb.animate({
				opacity: '0.5',
				top: '-0.5%',
				left: '-0.5%',
			}, 150);
    		$stp.animate({
				opacity: '1',
			}, 150);
			$news.animate({
                top: '50%',
                left: '50%',
				width: '1280px',
				height: '720px',
			}, 150);
            $f.animate({
                width: '15%',
                height: '40%',
				top: '0.5%',
			},150);
            $jfb.animate({
				bottom: '5%',
			},150);
			$jfr.animate({
				bottom: '6%',
			},150);
            $jsb.animate({
				bottom: '5%',
			},150);
			$jsr.animate({
				bottom: '6%',
			},150);
			$nt.animate({
				top: '5%',
				left: '50%',
			},150);
            document.getElementById("storecontent").style.zIndex = '4';
            document.getElementById("show").innerHTML = "Store";
			return;	
		};

		function CloseStore() {
			home = false;	
			comix = false;
			games = false;
			gallery = false;
			store = false;
			about = false;
			$stp.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("storecontent").style.zIndex = '1';
			return;
		};

	//about

		function AboutPreview() {
			$tvb.animate({
				opacity: '0',
			}, 150);	
			$ab.animate({
				top: '74.75%',
				left: '4.5%',
			}, 150);
			$ar.animate({
				top: '75.5%',
				left: '5.5%',
			}, 150);
			$jfrm.animate({
				opacity: '0.5',		
			},150);
			$jfbm.animate({
				opacity: '0.5',		
			},150);
			$jsb.animate({
				bottom: '10%',
				right: '10%',
				opacity: '0.5',
			},150);
			$jsr.animate({
				bottom: '6.5%',
				right: '6.5%',
				opacity: '0.5',
			},150);
			$jfb.animate({
				bottom: '10%',
				right: '10%',
				opacity: '0',
			},150);
			$jfr.animate({
				bottom: '6.5%',
				right: '6.5%',
				opacity: '0',
			},150);
            document.getElementById("show").innerHTML = "About";
		};

		function AboutExit() {
			$ab.animate({
				top: '74.75%',
				left: '4.75%',
			}, 150);
			$ar.animate({
				top: '75%',
				left: '5%',
			}, 150);
			$jfrm.animate({
				opacity: '0',		
			},150);
			$jfbm.animate({
				opacity: '0',		
			},150);
			$jsb.animate({
				bottom: '6%',
				right: '6%',
				opacity: '0',
			},150);
			$jsr.animate({
				bottom: '5%',
				right: '5%',
				opacity: '0',
			},150);
			$jfb.animate({
				bottom: '6%',
				right: '6%',
				opacity: '0.5',
			},150);
			$jfr.animate({
				bottom: '5%',
				right: '5%',
				opacity: '0.5',
			},150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
		};

	    function abhovleft(){
			$ab.animate({
				opacity: '0.5',
				top: '74.5%',
				left: '-5.5%',
			}, 150);
			$ar.animate({
				opacity: '0.75',
				top: '75.5%',
				left: '-4.5%',
			}, 150);
            document.getElementById("show").innerHTML = "About";
	    };

	    function abexitleft(){
			$ab.animate({
				opacity: '0.5',
				top: '74.75%',
				left: '-5%',
			}, 150);
			$ar.animate({
				opacity: '0.75',
				top: '75%',
				left: '-4.75%',
			}, 150);
            document.getElementById("show").innerHTML = "what's playing?";
        };

		function LoadAbout() {
			home = false;	
			comix = false;
			games = false;
			gallery = false;
			store = false;
			about = true;
			$jr.animate({
				opacity: '0.75',
				width: '20%',
				height: '20%',
				left: '7.5%',
				top: '15%',
			}, 150);
			$jb.animate({
				width: '20%',
				height: '20%',
				left: '7.25%',
				top: '14.75%',
			}, 150);
   			$lb.animate({
				opacity: '0.5',
				left: '-5%',
			}, 150);
			$lr.animate({
				opacity: '0.75',
				left: '-4.75%',
			}, 150);
			$ab.animate({
				opacity: '0.75',
				top: '74.75%',
				left: '-5%',
			}, 150);
			$ar.animate({
				opacity: '0.75',
				top: '75%',
				left: '-4.75%',
			}, 150);
			$tvb.animate({
				opacity: '0.5',
			}, 150);
			$news.animate({
                top: '50%',
                left: '50%',
				width: '1280px',
				height: '720px',
			}, 150);
			$ac.animate({
				opacity: '1',
			}, 150);
			$abt.animate({
				opacity: '1',
			}, 150);
			$abd.animate({
				opacity: '1',
			}, 150);
            $f.animate({
                width: '15%',
                height: '40%',
				top: '0.5%',
			},150);
            $jfb.animate({
				bottom: '5%',
			},150);
			$jfr.animate({
				bottom: '6%',
			},150);
            $jsb.animate({
				bottom: '5%',
			},150);
			$jsr.animate({
				bottom: '6%',
			},150);
			$nt.animate({
				top: '5%',
				left: '50%',
			},150);
			$jfrm.animate({
				opacity: '0',
			},150);
			$jfbm.animate({
				opacity: '0',
			},150);
            document.getElementById("aboutcontent").style.zIndex = '4';
            document.getElementById("show").innerHTML = "About";
			return;
		};

		function CloseAbout() {
			home = false;	
			comix = false;
			games = false;
			gallery = false;
			store = false;
			about = false;
			$ac.animate({
				opacity: '0',
			}, 150);
			$tvb.animate({
				opacity: '0',
			}, 150);
            document.getElementById("aboutcontent").style.zIndex = '1';
			return;
		};

});