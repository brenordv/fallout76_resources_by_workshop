// Define the `liveSearchApp` module
var liveSearchApp = angular.module('liveSearchApp', []);

// Define the `searchController` controller on the `liveSearchApp` module
liveSearchApp.controller('searchController', function($scope, $http) {
    $scope.resFilterTxt = "";
    $scope.title = "Fallout 76 -- Workshop Resource List";
    $scope.start = "I'm not affiliated with Bethesda...";
    $scope.instructionsVisible = false;

    //==========================================================================================
    //Begin of resource table
    $scope.resources = [
        {
            location: "Billings Homestead",
            url: "https://fo76map.com?locationIds=1025",
            resources: {
                food: 5,
                water: 3,
                copper: 1,
                crystal: 1,
                fertilizer: 1,
                gold: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Gorge Junkyard",
            url: "https://fo76map.com?locationIds=1323",
            resources: {
                food: 5,
                water: 3,
                concrete: 1,
                junk: 1,
                blackTitanium: 1,
                wood: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Lakeside Cabins",
            url: "https://fo76map.com?locationIds=1058",
            resources: {
                food: 6,
                water: 8,
                crystal: 1,
                lead: 1,
                silver: 1,
                wood: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Poseidon Energy Plant Yard",
            url: "https://fo76map.com?locationIds=1042",
            resources: {
                food: 9,
                water: 8,
                aluminum: 1,
                concrete: 1,
                fusionCore: 3,
                lead: 1,
                nuclearWaste: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Sunshine Meadows Industrial Farm",
            url: "https://fo76map.com?locationIds=1213",
            resources: {
                food: 10,
                water: 3,
                aluminum: 1,
                concrete: 1,
                fertilizer: 3,
                junk: 1,
                packagedFood: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Tyler Country Dirt Track",
            url: "https://fo76map.com?locationIds=1741",
            resources: {
                food: 1,
                water: 3,
                aluminum: 1,
                fertilizer: 1,
                junk: 1,
                silver: 3,
                steel: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Wade Airport",
            url: "https://fo76map.com?locationIds=1056",
            resources: {
                food: 5,
                water: 5,
                copper: 1,
                oil: 3,
                silver: 1
            },
            mapArea: "Forest",
            levelRange: "1-10"
        },
        {
            location: "Grafton Steel",
            url: "https://fo76map.com?locationIds=1178",
            resources: {
                food: 2,
                water: 2,
                copper: 1,
                lead: 1,
                oil: 1,
                steel: 4
            },
            mapArea: "Toxic Valley",
            levelRange: "10-25"
        },
        {
            location: "Hemlock Holes Maintenance",
            url: "https://fo76map.com?locationIds=1205",
            resources: {
                food: 3,
                water: 3,
                acid: 3,
                crystal: 1,
                gold: 1
            },
            mapArea: "Toxic Valley",
            levelRange: "10-25"
        },
        {
            location: "Beckley Mine Exhibit",
            url: "https://fo76map.com?locationIds=1030",
            resources: {
                food: 6,
                water: 8,
                crystal: 1,
                gold: 1,
                oil: 3
            },
            mapArea: "Ash Heap",
            levelRange: "25-35"
        },
        {
            location: "Charleston Landfill",
            url: "https://fo76map.com?locationIds=1041",
            resources: {
                food: 6,
                water: 8,
                aluminum: 1,
                copper: 1,
                junk: 3,
                steel: 1
            },
            mapArea: "Ash Heap",
            levelRange: "25-35"
        },
        {
            location: "Mount Blair",
            url: "https://fo76map.com?locationIds=1032",
            resources: {
                food: 9,
                water: 8,
                ore: 1
            },
            mapArea: "Ash Heap",
            levelRange: "25-35"
        },
        {
            location: "Converted Munitions Factory",
            url: "https://fo76map.com?locationIds=1527",
            resources: {
                food: 7,
                water: 8,
                aluminum: 1,
                ammo: 1,
                junk: 1,
                lead: 1,
                oil: 1,
                silver: 1
            },
            mapArea: "Savage Divide",
            levelRange: "15+"
        },
        {
            location: "Federal Disposal Field HZ-21",
            url: "https://fo76map.com?locationIds=1083",
            resources: {
                food: 9,
                water: 4,
                acid: 1,
                nuclear: 3,
                oil: 1
            },
            mapArea: "Savage Divide",
            levelRange: "15+"
        },
        {
            location: "Monongah Power Plant Yard",
            url: "https://fo76map.com?locationIds=1537",
            resources: {
                food: 8,
                water: 9,
                fusionCore: 3
            },
            mapArea: "Savage Divide",
            levelRange: "15+"
        },
        {
            location: "Red Rocket Mega Stop",
            url: "https://fo76map.com?locationIds=1199",
            resources: {
                food: 5,
                water: 8,
                aluminum: 3,
                junk: 1,
                nuclear: 1,
                steel: 1
            },
            mapArea: "Savage Divide",
            levelRange: "15+"
        },
        {
            location: "Spruce Knob",
            url: "https://fo76map.com?locationIds=1100",
            resources: {
                food: 4,
                water: 4,
                acid: 1,
                cooper: 1,
                gold: 3
            },
            mapArea: "Savage Divide",
            levelRange: "15+"
        },
        {
            location: "Berkeley Springs West",
            url: "https://fo76map.com?locationIds=1151",
            resources: {
                food: 1,
                water: 10,
                aluminum: 1,
                crystal: 1,
                lead: 1
            },
            mapArea: "Mire",
            levelRange: "30+"
        },
        {
            location: "Dabney Homestead",
            url: "https://fo76map.com?locationIds=1743",
            resources: {
                food: 6,
                water: 8,
                concrete: 1,
                copper: 1,
                fertilizer: 1,
                junk: 1,
                wood: 1
            },
            mapArea: "Mire",
            levelRange: "30+"
        },
        {
            location: "Dolly Sod's Campground",
            url: "https://fo76map.com?locationIds=1319",
            resources: {
                food: 9,
                water: 7
            },
            mapArea: "Mire",
            levelRange: "30+"
        },
        {
            location: "Thunder Mountain Power Plant Yard",
            url: "https://fo76map.com?locationIds=1322",
            resources: {
                food: 7,
                water: 9,
                crystal: 1,
                fusionCore: 3,
                nuclear: 1,
                steel: 1,
                wood: 1
            },
            mapArea: "Mire",
            levelRange: "30+"
        },
        {
            location: "Abandoned Bog Town",
            url: "https://fo76map.com?locationIds=1126",
            resources: {
                food: 7,
                water: 3,
                acid: 1,
                concrete: 3,
                gold: 1,
                oil: 1,
                silver: 3
            },
            mapArea: "Cranberry Bog",
            levelRange: "35+"
        }
    ]
    //end of resource table
    //==========================================================================================


   $scope.filterRes = function(res) {
        if($scope.resFilterTxt.trim() == "")
            return true;
        resKeys = Object.keys(res.resources);
        validKeys = [];

        keywords = $scope.resFilterTxt.replace(/\s+/g, "").toLowerCase().trim().split(",").filter(function (el) {
            return el != "";
        });

        for(i = 0; i < resKeys.length; i++) {
            for(j = 0; j < keywords.length; j++) {
                if (resKeys[i].toLowerCase().includes(keywords[j])) {
                    if (res.resources[resKeys[i]] > 0)
                        validKeys.push(resKeys[i]);
                }
            }
        }

        return validKeys.length == keywords.length;
   }
});