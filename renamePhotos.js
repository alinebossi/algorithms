let test1 = 'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11';

function solution(S) {
	let photos = [];
  let response = [];
  let lines = S.split("\n");
  
  lines.forEach((line) => {
  	let data = line.split(',');
    photo = { 'fileName': data[0].split('.')[0],
    					'fileExtension': data[0].split('.')[1],
    					'city': data[1].trim(),
              'timeStamp': data[2].trim()
            };
    photos.push(photo);
  });
  
	let cities = [];
  photos.forEach((item) => {
  	if (!cities.includes(item.city)) {
    	cities.push(item.city);
    }
  });
  
  cities.forEach((city) => {
  	filteredPhotos = photos.filter(p => p.city == city);
    let digits = filteredPhotos.length.toString().length;
    
    
    for (let i = 0; i < filteredPhotos.length; i++) {
    	var obj = filteredPhotos[i]
    	let fileName = filteredPhotos[i].city + formatDigits(i+1,digits) + '.' + filteredPhotos[i].fileExtension;
			response.push(fileName);
		}
    
  });
  
  return response;
}

function formatDigits(value, digits) {
	return String(value).padStart(digits, '0');
}

console.log(solution(test1));
