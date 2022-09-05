const tableBody = document.querySelector('.table-body');

// GET all departures
const getDepartures = () => {
  console.log('loading data...');

  fetch('http://localhost:8000/flights')
    .then((res) => res.json())
    .then((flights) => {
      populateTable(flights); // populate tables with departures data
      console.log('data loaded');
    })
    .catch((err) => console.log(err));
};

getDepartures();

const populateTable = (flights) => {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');
    const tableIcon = document.createElement('td');
    tableIcon.textContent = '✈';
    tableRow.append(tableIcon);
    tableBody.append(tableRow);

    const flightDetails = {
      time: flight.departing,
      destination: flight.destination.toUpperCase(),
      flight: flight.flightNumber.shift().toUpperCase(),
      gate: flight.gate,
      remarks: flight.status.toUpperCase(),
    };

    for (const flightDetail in flightDetails) {
      const tableCell = document.createElement('td');
      const word = Array.from(flightDetails[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }

      tableRow.append(tableCell);
    }
  }
};
