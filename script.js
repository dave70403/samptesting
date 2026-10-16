$(document).ready(function () {
   let jsonData = [
           {
              code: "1A.1.",
              name: "Driving at the wrong lane of the road.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.2.",
              name: "Illegal U-turn, performing a U-turn which crosses lanes of traffic.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.3.",
              name: "Blocking/cutting off intersection.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.4.",
              name: "Driving on pedestrian walk, which is taking their rights.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.5.",
              name: "Excessive use of horn, it may disturbing other drivers.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.6.",
              name: "Driving through a safety zone (any safety zone secured by traffic devices, and others).",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.7.",
              name: "Violating safety requirements (motorcycle: helmet), (car: belt), and lights.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.8.",
              name: "Violating safety requirements on heavy vehicles/big trucks.",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1A.9.",
              name: "Failure to Obey a Traffic Control Device (signs, roadblocks, hand signals, or other equipment used by law enforcement).",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1B.",
              name: "Failure to pay any issued ticket",
              jailtime: "15",
              fine: "65",
              bail: "195"
           },
           {
              code: "1C.",
              name: "Driving any motorized vehicle without an official driving license",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "1D.",
              name: "Maneuver any sea vehicles without official sailing licenses",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "1E.1.",
              name: "Driving any truck without official trucking licenses",
              jailtime: "30",
              fine: "1500",
              bail: "9000"
           },
           {
              code: "1E.2.",
              name: "Driving any lorry without official trucking licenses",
              jailtime: "30",
              fine: "500",
              bail: "3000"
           },
           {
              code: "1F.1.",
              name: "Lorry driving in any federal roads, in any inappropriate path, and without any permission from officers before",
              jailtime: "30",
              fine: "200",
              bail: "1200"
           },
           {
              code: "1F.2.",
              name: "Truck driving in any federal roads, in any inappropriate path, and without any permission from officers before",
              jailtime: "30",
              fine: "2000",
              bail: "10000"
           },
           {
              code: "1G.",
              name: "Flying any air vehicles without official flying licenses as a pilot",
              jailtime: "35",
              fine: "2250",
              bail: "10000"
           },
           {
              code: "1H.",
              name: "Speeding",
              jailtime: "0",
              fine: "1000",
              bail: "0"
           },
           {
              code: "1I.",
              name: "Vehicle Parking Violation",
              jailtime: "0",
              fine: "150",
              bail: "0"
           },
           {
              code: "1J.",
              name: "Illegal Modifications On Vehicles",
              jailtime: "0",
              fine: "200",
              bail: "0"
           },
           {
              code: "1K.",
              name: "Unregistered Vehicles",
              jailtime: "0",
              fine: "150",
              bail: "0"
           },
           {
              code: "1L.",
              name: "Vehicular Endangerment",
              jailtime: "30",
              fine: "2500",
              bail: "8000"
           },
           {
              code: "1M.",
              name: "Vehicular Manslaughter",
              jailtime: "40",
              fine: "250",
              bail: "2000"
           },
           {
              code: "1N.",
              name: "DWI or DUI",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "1O.",
              name: "Illegal Street Racing",
              jailtime: "25",
              fine: "150",
              bail: "750"
           },
           {
              code: "1P.",
              name: "Evading From Police",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "1Q.",
              name: "Flight Regulations",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "1R.",
              name: "Misbehavely Maneuvering / Operating an Aircraft / Aircraft Endangerment",
              jailtime: "30",
              fine: "450",
              bail: "2700"
           },
           {
              code: "1S.",
              name: "Emergency Landing",
              jailtime: "0",
              fine: "400",
              bail: "0"
           },
           {
              code: "1T.",
              name: "Failure to Yield to Emergency Vehicles",
              jailtime: "0",
              fine: "200",
              bail: "0"
           },
           {
              code: "1U.",
              name: "Failure to Yield to A Roadblock",
              jailtime: "0",
              fine: "200",
              bail: "0"
           },
           {
              code: "1V.",
              name: "Following An Emergency Vehicle",
              jailtime: "0",
              fine: "300",
              bail: "0"
           },
           {
              code: "1W.",
              name: "Altering or Changing a Vehicle Identification Number",
              jailtime: "20",
              fine: "100",
              bail: "400"
           },
           {
              code: "2D.",
              name: "Lumberjack License",
              jailtime: "25",
              fine: "2000",
              bail: "10000"
           },
           {
              code: "2F.",
              name: "Organizing a Small Illegal Event",
              jailtime: "25",
              fine: "5000",
              bail: "10000"
           },
           {
              code: "2G.",
              name: "Organizing a Big Illegal Event",
              jailtime: "35",
              fine: "7500",
              bail: "10000"
           },
           {
              code: "2H.",
              name: "Hunting Permit",
              jailtime: "30",
              fine: "2000",
              bail: "6000"
           },
           {
              code: "3A.",
              name: "Possessing of Marijuana / Pots (Small Amount)",
              jailtime: "10",
              fine: "200",
              bail: "400"
           },
           {
              code: "3B.",
              name: "Possessing of Marijuana / Pots (Large Amount)",
              jailtime: "15",
              fine: "400",
              bail: "1200"
           },
           {
              code: "3C.",
              name: "Possessing of Cocaine / Crack (Small Amount)",
              jailtime: "20",
              fine: "375",
              bail: "1500"
           },
           {
              code: "3D.",
              name: "Possessing of Cocaine / Crack (Large Amount)",
              jailtime: "25",
              fine: "750",
              bail: "3750"
           },
           {
              code: "3E.",
              name: "IUI or IWI",
              jailtime: "15",
              fine: "150",
              bail: "450"
           },
           {
              code: "3F.",
              name: "Selling or distributing of illegal drugs",
              jailtime: "25",
              fine: "500",
              bail: "2500"
           },
           {
              code: "3G.",
              name: "Drug Manufacturing",
              jailtime: "35",
              fine: "500",
              bail: "3500"
           },
           {
              code: "3H.",
              name: "Being Present for Illegal Drug Use",
              jailtime: "10",
              fine: "100",
              bail: "200"
           },
           {
              code: "4A.",
              name: "Possessing, Showing, And Display Any Usages of Sharp / Blunt Weapons",
              jailtime: "15",
              fine: "150",
              bail: "450"
           },
           {
              code: "4B.",
              name: "Possessing of Illegal Firearms",
              jailtime: "40",
              fine: "500",
              bail: "4000"
           },
           {
              code: "4C.",
              name: "Possessing of Legal Firearms Without Official Firearms License",
              jailtime: "20",
              fine: "50",
              bail: "200"
           },
           {
              code: "4D.",
              name: "Possessing Any Kind of Weapon Materials or Schematics",
              jailtime: "25",
              fine: "500",
              bail: "2500"
           },
           {
              code: "4F.",
              name: "Brandishing a Firearm or Weapon",
              jailtime: "20",
              fine: "200",
              bail: "800"
           },
           {
              code: "4G.",
              name: "Unlawful Discharge of a Firearm or Weapon",
              jailtime: "25",
              fine: "200",
              bail: "1000"
           },
           {
              code: "4H.",
              name: "Possession of a Body Armor",
              jailtime: "10",
              fine: "400",
              bail: "800"
           },
           {
              code: "4I.",
              name: "Weapon Trafficking",
              jailtime: "30",
              fine: "400",
              bail: "2400"
           },
           {
              code: "4J.",
              name: "Possessing Destructive Devices or Explosives",
              jailtime: "35",
              fine: "350",
              bail: "2450"
           },
           {
              code: "5A.",
              name: "Intimidation",
              jailtime: "10",
              fine: "50",
              bail: "100"
           },
           {
              code: "5B.",
              name: "Assault",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "5C.",
              name: "Assault with Deadly Weapons",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "5D.",
              name: "Battery",
              jailtime: "25",
              fine: "200",
              bail: "1000"
           },
           {
              code: "5E.",
              name: "Aggravated Battery",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "5F.",
              name: "Attempted Murdering",
              jailtime: "30",
              fine: "200",
              bail: "1200"
           },
           {
              code: "5G.",
              name: "Murdering",
              jailtime: "50",
              fine: "400",
              bail: "4000"
           },
           {
              code: "5H.",
              name: "Committed a group criminal assault with or without weapons",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "5I.",
              name: "Performing A Drive-By Using Light or Heavy Fire Arms",
              jailtime: "35",
              fine: "300",
              bail: "2100"
           },
           {
              code: "5J.",
              name: "Melee Robbery",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "5K.",
              name: "Armed Robbery",
              jailtime: "30",
              fine: "150",
              bail: "900"
           },
           {
              code: "5L.",
              name: "Piracy",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "5M.",
              name: "Grand Theft",
              jailtime: "25",
              fine: "250",
              bail: "1250"
           },
           {
              code: "5N.",
              name: "Grand Theft Auto",
              jailtime: "15",
              fine: "250",
              bail: "750"
           },
           {
              code: "5O.",
              name: "Grand Theft of Firearms",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "5P.",
              name: "Abuse or Desecration of Dead Human Body",
              jailtime: "15",
              fine: "200",
              bail: "600"
           },
           {
              code: "5Q.",
              name: "Kidnapping",
              jailtime: "30",
              fine: "350",
              bail: "2100"
           },
           {
              code: "5R.",
              name: "Hostage Taking",
              jailtime: "60",
              fine: "250",
              bail: "3000"
           },
           {
              code: "5S.",
              name: "Torture",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "5T.",
              name: "Blackmail",
              jailtime: "10",
              fine: "100",
              bail: "200"
           },
           {
              code: "5U.",
              name: "Human Trafficking",
              jailtime: "65",
              fine: "550",
              bail: "7150"
           },
           {
              code: "6A.",
              name: "Sexual Harassment",
              jailtime: "10",
              fine: "500",
              bail: "1000"
           },
           {
              code: "6B.",
              name: "Rape",
              jailtime: "60",
              fine: "300",
              bail: "3600"
           },
           {
              code: "6C.",
              name: "Statutory Rape",
              jailtime: "75",
              fine: "500",
              bail: "7500"
           },
           {
              code: "6D.",
              name: "Prostitution",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "6E.",
              name: "Solicitation of Sexual Engagement",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "6F.",
              name: "Being Naked In Public",
              jailtime: "5",
              fine: "50",
              bail: "0"
           },
           {
              code: "6G.",
              name: "Performs Any Sexual Action in Public",
              jailtime: "15",
              fine: "150",
              bail: "450"
           },
           {
              code: "7A.",
              name: "Initiating A Riot",
              jailtime: "15",
              fine: "200",
              bail: "600"
           },
           {
              code: "7B.",
              name: "Failing to Disperse After Lawfully Ordered by The Officials",
              jailtime: "20",
              fine: "250",
              bail: "1000"
           },
           {
              code: "7C.",
              name: "Participating in a Riot",
              jailtime: "10",
              fine: "75",
              bail: "150"
           },
           {
              code: "7D.",
              name: "Spitting in Public Space",
              jailtime: "0",
              fine: "150",
              bail: "0"
           },
           {
              code: "7E.",
              name: "Pee in Public",
              jailtime: "0",
              fine: "150",
              bail: "0"
           },
           {
              code: "7F.",
              name: "Drunk in Public Space",
              jailtime: "0",
              fine: "200",
              bail: "0"
           },
           {
              code: "7G.",
              name: "Vilification",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "7H.",
              name: "Hate Speech",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "7I.",
              name: "Vigilantism",
              jailtime: "30",
              fine: "300",
              bail: "1800"
           },
           {
              code: "7J.",
              name: "Disturbing Public Peace",
              jailtime: "15",
              fine: "100",
              bail: "300"
           },
           {
              code: "7K.",
              name: "Brawl in Public Space",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "7M.",
              name: "Jaywalk",
              jailtime: "0",
              fine: "50",
              bail: "0"
           },
           {
              code: "7N.",
              name: "Littering the Public Facility / Space",
              jailtime: "0",
              fine: "250",
              bail: "0"
           },
           {
              code: "7O.",
              name: "Unlawful Assembly",
              jailtime: "20",
              fine: "100",
              bail: "400"
           },
           {
              code: "7P.",
              name: "Stalking",
              jailtime: "20",
              fine: "200",
              bail: "800"
           },
           {
              code: "7Q.",
              name: "Public Intoxication",
              jailtime: "10",
              fine: "250",
              bail: "500"
           },
           {
              code: "7R.",
              name: "Animal Abuse",
              jailtime: "20",
              fine: "500",
              bail: "2000"
           },
           {
              code: "7S.",
              name: "Animal Cruelty",
              jailtime: "0",
              fine: "300",
              bail: "0"
           },
           {
              code: "8A.",
              name: "Obstruction of Justice",
              jailtime: "15",
              fine: "30",
              bail: "90"
           },
           {
              code: "8B.",
              name: "Abusing Government Hotline",
              jailtime: "10",
              fine: "100",
              bail: "200"
           },
           {
              code: "8C.",
              name: "Governments Attribute",
              jailtime: "60",
              fine: "100",
              bail: "1200"
           },
           {
              code: "8D.",
              name: "Impersonating Government Staff",
              jailtime: "60",
              fine: "100",
              bail: "1200"
           },
           {
              code: "8E.",
              name: "Attempting to Bribe or Corrupt Any Public Officials",
              jailtime: "15",
              fine: "200",
              bail: "600"
           },
           {
              code: "8F.",
              name: "Attempting to bribe, corrupt or prevent any crime’s witnesses to step out and give out information to law enforcers",
              jailtime: "10",
              fine: "60",
              bail: "120"
           },
           {
              code: "8G.",
              name: "Making a False Report",
              jailtime: "20",
              fine: "200",
              bail: "800"
           },
           {
              code: "8H.",
              name: "Giving False Information to the Police Officials",
              jailtime: "20",
              fine: "125",
              bail: "0"
           },
           {
              code: "8I.",
              name: "Perjury",
              jailtime: "20",
              fine: "500",
              bail: "2000"
           },
           {
              code: "8J.",
              name: "Assaulting on LEO",
              jailtime: "40",
              fine: "150",
              bail: "1200"
           },
           {
              code: "8K.",
              name: "Attempted Murdering A Public Officials",
              jailtime: "60",
              fine: "500",
              bail: "6000"
           },
           {
              code: "8L.",
              name: "Murdering A Public Officials",
              jailtime: "70",
              fine: "600",
              bail: "8400"
           },
           {
              code: "8M.",
              name: "Harbouring Criminals",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "8N.",
              name: "Fraud / Scam",
              jailtime: "20",
              fine: "250",
              bail: "1000"
           },
           {
              code: "8O.",
              name: "Forgery",
              jailtime: "30",
              fine: "500",
              bail: "3000"
           },
           {
              code: "8P.",
              name: "Corruption",
              jailtime: "300",
              fine: "5000",
              bail: "10000"
           },
           {
              code: "9A.",
              name: "Trespassing",
              jailtime: "5",
              fine: "300",
              bail: "0"
           },
           {
              code: "9B.",
              name: "Trespassing Government Property",
              jailtime: "20",
              fine: "100",
              bail: "400"
           },
           {
              code: "9C.",
              name: "Vandalism",
              jailtime: "15",
              fine: "250",
              bail: "450"
           },
           {
              code: "9D.",
              name: "Arson",
              jailtime: "30",
              fine: "250",
              bail: "1500"
           },
           {
              code: "9E.",
              name: "Extortion",
              jailtime: "20",
              fine: "150",
              bail: "600"
           },
           {
              code: "9F.",
              name: "Using Property As Illegal Distribution",
              jailtime: "60",
              fine: "300",
              bail: "3600"
           }
        ];

   let tableBody = $("#violate-data tbody");
   let addAllButton = $('<button id="add-all" class="btn btn-primary w-100 mt-3 d-none">ADD ALL</button>');
   $("#violate-data").after(addAllButton);
   let maxJailtime = 480;
   let maxBail = 25000;
   let maxFine = 10000;

   // Fungsi untuk menampilkan data pelanggaran
   function renderViolations(data) {
      tableBody.empty();
      if (data.length > 0) {
          $("#add-all").removeClass("d-none");
      } else {
          $("#add-all").addClass("d-none");
      }
      $.each(data, function (index, charge) {
          let row = $("<tr></tr>");
  
          // Kolom # Charge Code
          row.append($("<td></td>").text(charge.code));
  
          // Kolom Violation (charge.name)
          row.append($("<td></td>").text(charge.name));
  
          // Kolom Jailtime 
          row.append($("<td></td>").addClass("text-center").text(charge.jailtime));
  
          // Kolom Fine 
          row.append($("<td></td>").addClass("text-center").text(charge.fine));
  
          // Kolom Bail 
          row.append($("<td></td>").addClass("text-center").text(charge.bail));
  
          // Kolom Action (Tombol Add)
          let actionCell = $("<td></td>").addClass("text-center");
          let addButton = $('<button type="button" class="btn btn-sm btn-success">Add</button>')
              .attr("data-code", charge.code)
              .click(function () {
                  addViolation(charge);
                  $(this).prop("disabled", true);
              });
  
          if ($(`#violate-select tbody tr td:first-child:contains('${charge.code}')`).length > 0) {
              addButton.prop("disabled", true);
          }
  
          actionCell.append(addButton);
          row.append(actionCell);
  
          // Kolom Reff (Tombol Link)
          let reffCell = $("<td></td>").addClass("text-center");
  
          // Format charge.code
          let formattedCode = charge.code.replace(/^(\d+)([A-Za-z]).*/, '($1) $2');
  
          // Buat tombol link dengan formattedCode
          let linkButton = $('<a></a>', {
              href: `https://police.san-andreas.net/viewtopic.php?t=148639#:~:text=${formattedCode}`,
              target: "_blank",
              rel: "noopener noreferrer",
              html: '<i class="fas fa-external-link-alt"></i>'
          });
  
          // Tambahkan tombol link ke dalam reffCell
          reffCell.append(linkButton);
          row.append(reffCell);
  
          // Tambahkan baris ke dalam tabel
          tableBody.append(row);
      });
  }

// Fungsi untuk menambahkan pelanggaran ke tabel yang dipilih
function addViolation(charge) {
   let selectedTableBody = $("#violate-select tbody");
   let suspectId = $("#suspectid").val();

   let newRow = $("<tr></tr>");
   newRow.append($("<td></td>").text(charge.code));
   newRow.append($("<td></td>").text(charge.name));
   newRow.append($("<td></td>").text(charge.jailtime));
   newRow.append($("<td></td>").text(charge.fine));
   newRow.append($("<td></td>").text(charge.bail));

   let actionCell = $("<td></td>");
   let copyButton = $('<button type="button" class="btn btn-sm btn-info me-2">Copy</button>')
       .click(function () {
           let command = charge.jailtime === "0" && charge.bail === "0" ?
               `/ticket ${suspectId} ${charge.fine} ${charge.code} ${charge.name}` :
               `/su ${suspectId} ${charge.code} ${charge.name}`;
           navigator.clipboard.writeText(command).then(function () {
               ;
           });
       });
   let removeButton = $('<button type="button" class="btn btn-sm btn-danger">Remove</button>')
       .click(function () {
           newRow.remove();
           updateArrestCommand();
           $(`button[data-code="${charge.code}"]`).prop("disabled", false); // Aktifkan tombol "Add"
       });
   actionCell.append(copyButton).append(removeButton);
   newRow.append(actionCell);

   selectedTableBody.append(newRow);
   sortTable(); // Urutkan tabel setelah menambahkan baris baru
   updateArrestCommand(); // Update total summary
}

// Fungsi untuk mengurutkan tabel berdasarkan kode
function sortTable() {
   let rows = $("#violate-select tbody tr").get();

   rows.sort(function (a, b) {
       let codeA = $(a).find("td:first").text().toUpperCase();
       let codeB = $(b).find("td:first").text().toUpperCase();
       return codeA.localeCompare(codeB, undefined, { numeric: true, sensitivity: 'base' });
   });

   $.each(rows, function (index, row) {
       $("#violate-select tbody").append(row);
   });
}

       // Fungsi untuk menambahkan semua hasil pencarian ke daftar yang dipilih
       $("#add-all").click(function () {
         $("#violate-data tbody tr").each(function () {
             let code = $(this).find("td:nth-child(1)").text();
             if ($(`#violate-select tbody tr td:first-child:contains('${code}')`).length === 0) {
                 let charge = {
                     code: code,
                     name: $(this).find("td:nth-child(2)").text(),
                     jailtime: $(this).find("td:nth-child(3)").text(),
                     fine: $(this).find("td:nth-child(4)").text(),
                     bail: $(this).find("td:nth-child(5)").text()
                 };
                 addViolation(charge);
                 $(`button[data-code="${charge.code}"]`).prop("disabled", true);
             }
         });
         updateArrestCommand(); // Update total summary
     });
   // Fungsi untuk memperbarui perintah /arrest atau /ticket
   function updateArrestCommand() {
      let totalJailtime = 0;
      let totalFine = 0;
      let totalBail = 0;
      let totalCount = 0;
  
      $("#violate-select tbody tr").each(function () {
          totalJailtime += parseInt($(this).find("td:nth-child(3)").text(), 10);
          totalFine += parseInt($(this).find("td:nth-child(4)").text(), 10);
          totalBail += parseInt($(this).find("td:nth-child(5)").text(), 10);
          totalCount++;
      });
  
      // Batasi nilai maksimum
      totalJailtime = Math.min(totalJailtime, maxJailtime);
      totalFine = Math.min(totalFine, maxFine);
      totalBail = Math.min(totalBail, maxBail);
  
      // Update total summary
      $("#total-count").text(totalCount + " Charges");
      $("#total-jailtime").text(totalJailtime + " Minutes");
      $("#total-fine").text("$" + totalFine);
      $("#total-bail").text("$" + totalBail);
  
      let command = totalJailtime === 0 && totalBail === 0 ?
          `/ticket ${$("#suspectid").val()} ${totalFine} [violation]` :
          `/arrest ${$("#suspectid").val()} ${totalJailtime} ${totalFine} ${totalBail}`;
      $("#arrest").val(command);
  }
   
   // Fitur pencarian multiple
       let debounceTimer;
     $("#search-violation").on("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
           let searchTerm = $(this).val().toLowerCase().trim();

           // If input is empty, show all results
           if (!searchTerm) {
                 renderViolations(jsonData);
                 return;
           }

           // Split input by comma, remove empty spaces
           let searchTerms = searchTerm.split(",").map(term => term.trim()).filter(term => term);

           let filteredData = jsonData.filter(charge => 
                 searchTerms.some(term => 
                    charge.code.toLowerCase().includes(term) || 
                    charge.name.toLowerCase().includes(term)
                 )
           );

           renderViolations(filteredData);
        }, 10); // Debounce to improve performance
     });


// Fungsi untuk menampilkan/menyembunyikan tombol X
$("#search-violation").on("input", function () {
   if ($(this).val().trim() !== "") {
       $("#clear-search").removeClass("d-none");
   } else {
       $("#clear-search").addClass("d-none");
   }
});

// Fungsi untuk menghapus input dan menyembunyikan tombol X
$("#clear-search").click(function () {
   $("#search-violation").val("").trigger("input"); // Kosongkan input dan trigger event input
   renderViolations(jsonData); // Tampilkan semua data
});

   // Tombol Clear All
   $("#clear-violations").click(function () {
      if ($("#violate-select tbody tr").length === 0) {
          Swal.fire({
              title: "❌ Oops!",
              text: "Tidak ada data yang bisa dihapus.",
              icon: "info",
              background: "#1e1e1e",
              color: "#fff",
              confirmButtonColor: "#ffc107"
          });
          return;
      }
  
      Swal.fire({
          title: "⚠️ Are you sure?",
          text: "Kamu yakin ingin menghapus semua data?",
          icon: "warning",
          background: "#1e1e1e",
          color: "#fff",
          showCancelButton: true,
          confirmButtonColor: "#28a745",
          cancelButtonColor: "#dc3545",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel"
      }).then((result) => {
          if (result.isConfirmed) {
              $("#violate-select tbody").empty(); // Kosongkan daftar
              updateArrestCommand(); // Perbarui command dan total summary
              $(".btn-success").prop("disabled", false); // Aktifkan kembali semua tombol "Add"
  
              Swal.fire({
                  title: "✅ Deleted!",
                  text: "Semua data telah dihapus.",
                  icon: "success",
                  background: "#1e1e1e",
                  color: "#fff",
                  timer: 2000,
                  showConfirmButton: false
              });
          }
      });
  });

   // Tombol Scroll to Top
   $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
         $("#scroll-to-top").fadeIn();
     } else {
         $("#scroll-to-top").fadeOut();
     }
 });

 $("#scroll-to-top").click(function () {
     $("html, body").animate({ scrollTop: 0 }, 500);
 });

     // Event listener untuk input suspectid (auto-apply)
     $("#suspectid").on("input", function () {
      updateArrestCommand(); // Perbarui perintah /arrest atau /ticket

      // Perbarui ID suspect di semua pelanggaran yang sudah dipilih
      $("#violate-select tbody tr").each(function () {
          let charge = {
              code: $(this).find("td:nth-child(1)").text(),
              name: $(this).find("td:nth-child(2)").text(),
              jailtime: $(this).find("td:nth-child(3)").text(),
              fine: $(this).find("td:nth-child(4)").text(),
              bail: $(this).find("td:nth-child(5)").text()
          };

            // Perbarui tombol "Copy" dengan ID suspect yang baru
            $(this).find(".btn-info").off("click").click(function () {
               let command = charge.jailtime === "0" && charge.bail === "0" ?
                   `/ticket ${$("#suspectid").val()} ${charge.fine} ${charge.code} ${charge.name}` :
                   `/su ${$("#suspectid").val()} ${charge.code} ${charge.name}`;
               navigator.clipboard.writeText(command).then(function () {
                   ;
               });
           });
       });
   });
   // Event listener untuk tombol "Copy Command"
   $("#copyarrest").click(function () {
       let arrestCommand = $("#arrest").val();
       navigator.clipboard.writeText(arrestCommand).then(function () {
           ;
       });
   });

   // Render data awal
   renderViolations(jsonData);
});


// Fungsi untuk menyalin semua kode pelanggaran dari tabel Selected Violations
$("#copy-all-codes").click(function () {
    if ($("#violate-select tbody tr").length === 0) {
        Swal.fire({
            title: "⚠️ Oops!",
            text: "Tidak ada data yang bisa disalin.",
            icon: "warning",
            background: "#1e1e1e",
            color: "#fff",
            confirmButtonColor: "#28a745"
        });
        return;
    }

    let codes = [];
    $("#violate-select tbody tr").each(function () {
        codes.push($(this).find("td:first").text().replace(/\./g, "")); // Hapus titik
    });

    let formattedCodes = codes.join(", ") + ".";
    navigator.clipboard.writeText(formattedCodes).then(() => {
        Swal.fire({
            title: "✅ Copied!",
            text: "Kode telah disalin: " + formattedCodes,
            icon: "success",
            background: "#1e1e1e",
            color: "#fff",
            timer: 2000,
            showConfirmButton: false
        });
    });
});
