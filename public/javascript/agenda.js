handleAgendaPage = () => {
  const culture = '#56daff';
  const active = '#63ff82';
  const food = '#f26060';

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  formatPhoneNumber = phoneNumber => {
    if (phoneNumber === '') {
      return 'Phone number not provided.';
    }
    let splitNumber = phoneNumber.split('');
    splitNumber.shift();
    splitNumber.shift();
    if (splitNumber === '[]') {
      return 'Phone number not provided.';
    }
    splitNumber.splice(0, 0, '(');
    splitNumber.splice(4, 0, ')');
    splitNumber.splice(5, 0, '-');
    splitNumber.splice(9, 0, '-');
    const newNumber = splitNumber.join('');
    return newNumber;
  };

  $.ajax({
    type: 'GET',
    url: '/data/options',
    success: function(options) {
      const agendaOptions = {
        priceOfTrip: options.price,
        lengthOfTrip: Number(options.length),
        activityOfTrip: options.activity,
        locationOfTrip: options.location
      };

      let searchTerms = {
        term: 'restaurants',
        location: agendaOptions.locationOfTrip,
        price: agendaOptions.priceOfTrip,
        limit: 10
      };

      let activity = {
        term: agendaOptions.activityOfTrip,
        location: agendaOptions.locationOfTrip,
        price: agendaOptions.priceOfTrip,
        limit: 10
      };

      renderInfo = () => {
        $.ajax({
          type: 'GET',
          url: '/data/agenda',
          success: function(tempAgenda) {
            console.log(tempAgenda);
            if (agendaOptions.lengthOfTrip >= 3) {
              $('.agendaTitle').text('Scout');
              $('.scoutItem').css('display', 'block');

              $('.itemNameOne').text(tempAgenda['0'].name);
              $('.itemOnePicture').attr('src', tempAgenda['0'].image_url);
              $('.itemOneGenre').text(tempAgenda['0'].categories[0].title);
              $('.itemOneFirstAddress').text(
                tempAgenda['0'].location.display_address[0]
              );
              $('.itemOneSecondAddress').text(
                tempAgenda['0'].location.display_address[1]
              );
              $('.itemOnePhone').text(formatPhoneNumber(tempAgenda['0'].phone));
              if (tempAgenda['0'].is_closed === 'false') {
                $('.itemOneOpen').text('Currently Open');
              } else {
                $('.itemOneOpen').text('Currently Closed');
              }

              $('.itemNameTwo').text(tempAgenda['1'].name);
              $('.itemTwoPicture').attr('src', tempAgenda['1'].image_url);
              $('.itemTwoGenre').text(tempAgenda['1'].categories[0].title);
              $('.itemTwoFirstAddress').text(
                tempAgenda['1'].location.display_address[0]
              );
              $('.itemTwoSecondAddress').text(
                tempAgenda['1'].location.display_address[1]
              );
              $('.itemTwoPhone').text(formatPhoneNumber(tempAgenda['1'].phone));
              if (tempAgenda['1'].is_closed === 'false') {
                $('.itemTwoOpen').text('Currently Open');
              } else {
                $('.itemTwoOpen').text('Currently Closed');
              }

              $('.itemNameThree').text(tempAgenda['2'].name);
              $('.itemThreePicture').attr('src', tempAgenda['2'].image_url);
              $('.itemThreeGenre').text(tempAgenda['2'].categories[0].title);
              $('.itemThreeFirstAddress').text(
                tempAgenda['2'].location.display_address[0]
              );
              $('.itemThreeSecondAddress').text(
                tempAgenda['2'].location.display_address[1]
              );
              $('.itemThreePhone').text(
                formatPhoneNumber(tempAgenda['2'].phone)
              );
              if (tempAgenda['2'].is_closed === 'false') {
                $('.itemThreeOpen').text('Currently Open');
              } else {
                $('.itemThreeOpen').text('Currently Closed');
              }

              $('.itemTwo').css('background-color', food);

              if (agendaOptions.activityOfTrip === 'Arts & Entertainment') {
                $('.agendaTitle').text('The Cultured Scout');
                $('.itemOne').css('background-color', culture);
                $('.itemThree').css('background-color', culture);
              } else if (agendaOptions.activityOfTrip === 'Active Life') {
                $('.agendaTitle').text('The Active Scout');
                $('.itemOne').css('background-color', active);
                $('.itemThree').css('background-color', active);
              } else if (agendaOptions.activityOfTrip === 'Balance') {
                $('.agendaTitle').text('The Balanced Scout');
                $('.itemOne').css('background-color', active);
                $('.itemThree').css('background-color', culture);
              }

              if (agendaOptions.lengthOfTrip >= 5) {
                $('.pioneerItem').css('display', 'block');

                $('.itemNameFour').text(tempAgenda['3'].name);
                $('.itemFourPicture').attr('src', tempAgenda['3'].image_url);
                $('.itemFourGenre').text(tempAgenda['3'].categories[0].title);
                $('.itemFourFirstAddress').text(
                  tempAgenda['3'].location.display_address[0]
                );
                $('.itemFourSecondAddress').text(
                  tempAgenda['3'].location.display_address[1]
                );
                $('.itemFourPhone').text(
                  formatPhoneNumber(tempAgenda['3'].phone)
                );
                if (tempAgenda['3'].is_closed === 'false') {
                  $('.itemFourOpen').text('Currently Open');
                } else {
                  $('.itemFourOpen').text('Currently Closed');
                }

                $('.itemNameFive').text(tempAgenda['4'].name);
                $('.itemFivePicture').attr('src', tempAgenda['4'].image_url);
                $('.itemFiveGenre').text(tempAgenda['4'].categories[0].title);
                $('.itemFiveFirstAddress').text(
                  tempAgenda['4'].location.display_address[0]
                );
                $('.itemFiveSecondAddress').text(
                  tempAgenda['4'].location.display_address[1]
                );
                $('.itemFivePhone').text(
                  formatPhoneNumber(tempAgenda['0'].phone)
                );
                if (tempAgenda['4'].is_closed === 'false') {
                  $('.itemFiveOpen').text('Currently Open');
                } else {
                  $('.itemFiveOpen').text('Currently Closed');
                }

                $('.itemTwo').css('background-color', food);
                $('.itemFive').css('background-color', food);

                if (agendaOptions.activityOfTrip === 'Arts & Entertainment') {
                  $('.agendaTitle').text('The Cultured Pioneer');
                  $('.itemOne').css('background-color', culture);
                  $('.itemThree').css('background-color', culture);
                  $('.itemFour').css('background-color', culture);
                } else if (agendaOptions.activityOfTrip === 'Active Life') {
                  $('.agendaTitle').text('The Active Pioneer');
                  $('.itemOne').css('background-color', active);
                  $('.itemThree').css('background-color', active);
                  $('.itemFour').css('background-color', active);
                } else if (agendaOptions.activityOfTrip === 'Balance') {
                  $('.agendaTitle').text('The Balanced Pioneer');
                  $('.itemOne').css('background-color', active);
                  $('.itemThree').css('background-color', culture);
                  $('.itemFour').css('background-color', culture);
                }

                if (agendaOptions.lengthOfTrip >= 7) {
                  $('.settlerItem').css('display', 'block');

                  $('.itemNameSix').text(tempAgenda['5'].name);
                  $('.itemSixPicture').attr('src', tempAgenda['5'].image_url);
                  $('.itemSixGenre').text(tempAgenda['5'].categories[0].title);
                  $('.itemSixFirstAddress').text(
                    tempAgenda['5'].location.display_address[0]
                  );
                  $('.itemSixSecondAddress').text(
                    tempAgenda['5'].location.display_address[1]
                  );
                  $('.itemSixPhone').text(
                    formatPhoneNumber(tempAgenda['5'].phone)
                  );
                  if (tempAgenda['5'].is_closed === 'false') {
                    $('.itemSixOpen').text('Currently Open');
                  } else {
                    $('.itemSixOpen').text('Currently Closed');
                  }

                  $('.itemNameSeven').text(tempAgenda['6'].name);
                  $('.itemSevenPicture').attr('src', tempAgenda['6'].image_url);
                  $('.itemSevenGenre').text(
                    tempAgenda['6'].categories[0].title
                  );
                  $('.itemSevenFirstAddress').text(
                    tempAgenda['6'].location.display_address[0]
                  );
                  $('.itemSevenSecondAddress').text(
                    tempAgenda['6'].location.display_address[1]
                  );
                  $('.itemSevenPhone').text(
                    formatPhoneNumber(tempAgenda['6'].phone)
                  );
                  if (tempAgenda['6'].is_closed === 'false') {
                    $('.itemSevenOpen').text('Currently Open');
                  } else {
                    $('.itemSevenOpen').text('Currently Closed');
                  }

                  $('.itemOne').css('background-color', food);
                  $('.itemFour').css('background-color', food);
                  $('.itemSeven').css('background-color', food);

                  if (agendaOptions.activityOfTrip === 'Arts & Entertainment') {
                    $('.agendaTitle').text('The Cultured Settler');
                    $('.itemTwo').css('background-color', culture);
                    $('.itemThree').css('background-color', culture);
                    $('.itemFive').css('background-color', culture);
                    $('.itemSix').css('background-color', culture);
                  } else if (agendaOptions.activityOfTrip === 'Active Life') {
                    $('.agendaTitle').text('The Active Settler');
                    $('.itemTwo').css('background-color', active);
                    $('.itemThree').css('background-color', active);
                    $('.itemFive').css('background-color', active);
                    $('.itemSix').css('background-color', active);
                  } else if (agendaOptions.activityOfTrip === 'Balance') {
                    $('.agendaTitle').text('The Balanced Settler');
                    $('.itemTwo').css('background-color', active);
                    $('.itemThree').css('background-color', active);
                    $('.itemFive').css('background-color', culture);
                    $('.itemSix').css('background-color', culture);
                  }
                }
              }
            }
          }
        });
      };

      handleApiCalls = () => {
        //This bit if for the Scout Trip and all the possible choices the user can make.
        if (agendaOptions.lengthOfTrip === 3) {
          $.ajax({
            type: 'POST',
            url: '/data',
            data: searchTerms,
            success: function(food) {
              const numberOfFood = food.length - 1;
              shuffleArray(food);
              for (let i = 0; i < numberOfFood; i++) {
                food.splice(food.length - 1, 1);
              }

              if (
                agendaOptions.activityOfTrip === 'Active Life' ||
                agendaOptions.activityOfTrip === 'Arts & Entertainment'
              ) {
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(event) {
                    const numberOfEvent = event.length - 2;
                    shuffleArray(event);
                    for (let i = 0; i < numberOfEvent; i++) {
                      event.splice(event.length - 1, 1);
                    }
                    food.splice(0, 0, event[0]);
                    food.splice(2, 0, event[1]);

                    const agenda = food.reduce(function(acc, cur, i) {
                      acc[i] = cur;
                      return acc;
                    }, {});

                    console.log(agenda);

                    $.ajax({
                      type: 'POST',
                      url: '/data/agenda',
                      data: agenda,
                      success: function(res) {
                        renderInfo();
                      }
                    });
                  }
                });
              } else if (agendaOptions.activityOfTrip === 'Balance') {
                activity.term = 'Active Life';
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(partialAgenda) {
                    let numberOfEvent = partialAgenda.length - 1;
                    shuffleArray(partialAgenda);
                    for (let i = 0; i < numberOfEvent; i++) {
                      partialAgenda.splice(partialAgenda.length - 1, 1);
                    }
                    partialAgenda.splice(1, 0, food[0]);

                    activity.term = 'Arts & Entertainment';
                    $.ajax({
                      type: 'POST',
                      url: '/data',
                      data: activity,
                      success: function(event) {
                        let numberOfEvent = event.length - 1;
                        shuffleArray(event);
                        for (let i = 0; i < numberOfEvent; i++) {
                          event.splice(event.length - 1, 1);
                        }
                        partialAgenda.splice(2, 0, event[0]);

                        const agenda = partialAgenda.reduce(function(
                          acc,
                          cur,
                          i
                        ) {
                          acc[i] = cur;
                          return acc;
                        }, {});

                        console.log(agenda);
                        $.ajax({
                          type: 'POST',
                          url: '/data/agenda',
                          data: agenda,
                          success: function(res) {
                            renderInfo();
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          });
        } else if (agendaOptions.lengthOfTrip === 5) {
          $.ajax({
            type: 'POST',
            url: '/data',
            data: searchTerms,
            success: function(food) {
              const numberOfFood = food.length - 2;
              shuffleArray(food);
              for (let i = 0; i < numberOfFood; i++) {
                food.splice(food.length - 1, 1);
              }

              if (
                agendaOptions.activityOfTrip === 'Active Life' ||
                agendaOptions.activityOfTrip === 'Arts & Entertainment'
              ) {
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(event) {
                    const numberOfEvent = event.length - 3;
                    shuffleArray(event);
                    for (let i = 0; i < numberOfEvent; i++) {
                      event.splice(event.length - 1, 1);
                    }
                    food.splice(0, 0, event[0]);
                    food.splice(2, 0, event[1]);
                    food.splice(3, 0, event[2]);

                    const agenda = food.reduce(function(acc, cur, i) {
                      acc[i] = cur;
                      return acc;
                    }, {});

                    console.log(agenda);

                    $.ajax({
                      type: 'POST',
                      url: '/data/agenda',
                      data: agenda,
                      success: function(res) {
                        renderInfo();
                      }
                    });
                  }
                });
              } else if (agendaOptions.activityOfTrip === 'Balance') {
                activity.term = 'Active Life';
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(partialAgenda) {
                    let numberOfEvent = partialAgenda.length - 1;
                    shuffleArray(partialAgenda);
                    for (let i = 0; i < numberOfEvent; i++) {
                      partialAgenda.splice(partialAgenda.length - 1, 1);
                    }
                    partialAgenda.splice(1, 0, food[0]);
                    partialAgenda.splice(2, 0, food[1]);
                    activity.term = 'Arts & Entertainment';

                    $.ajax({
                      type: 'POST',
                      url: '/data',
                      data: activity,
                      success: function(event) {
                        let numberOfEvent = event.length - 2;
                        shuffleArray(event);
                        for (let i = 0; i < numberOfEvent; i++) {
                          event.splice(event.length - 1, 1);
                        }
                        event.splice(2, 0, partialAgenda[2]);
                        event.splice(0, 0, partialAgenda[0]);
                        event.splice(1, 0, partialAgenda[1]);
                        const agenda = event.reduce(function(acc, cur, i) {
                          acc[i] = cur;
                          return acc;
                        }, {});

                        $.ajax({
                          type: 'POST',
                          url: '/data/agenda',
                          data: agenda,
                          success: function(res) {
                            renderInfo();
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          });
        } else if (agendaOptions.lengthOfTrip === 7) {
          $.ajax({
            type: 'POST',
            url: '/data',
            data: searchTerms,
            success: function(food) {
              const numberOfFood = food.length - 3;
              shuffleArray(food);
              for (let i = 0; i < numberOfFood; i++) {
                food.splice(food.length - 1, 1);
              }
              if (
                agendaOptions.activityOfTrip === 'Active Life' ||
                agendaOptions.activityOfTrip === 'Arts & Entertainment'
              ) {
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(event) {
                    const numberOfEvent = event.length - 4;
                    shuffleArray(event);
                    for (let i = 0; i < numberOfEvent; i++) {
                      event.splice(event.length - 1, 1);
                    }
                    food.splice(1, 0, event[0]);
                    food.splice(2, 0, event[1]);
                    food.splice(4, 0, event[2]);
                    food.splice(5, 0, event[3]);

                    const agenda = food.reduce(function(acc, cur, i) {
                      acc[i] = cur;
                      return acc;
                    }, {});

                    console.log(agenda);

                    $.ajax({
                      type: 'POST',
                      url: '/data/agenda',
                      data: agenda,
                      success: function(res) {
                        renderInfo();
                      }
                    });
                  }
                });
              } else if (agendaOptions.activityOfTrip === 'Balance') {
                activity.term = 'Active Life';
                $.ajax({
                  type: 'POST',
                  url: '/data',
                  data: activity,
                  success: function(partialAgenda) {
                    let numberOfEvent = partialAgenda.length - 2;
                    shuffleArray(partialAgenda);
                    for (let i = 0; i < numberOfEvent; i++) {
                      partialAgenda.splice(partialAgenda.length - 1, 1);
                    }
                    partialAgenda.splice(0, 0, food[0]);
                    partialAgenda.splice(3, 0, food[1]);
                    partialAgenda.splice(4, 0, food[2]);

                    activity.term = 'Arts & Entertainment';
                    $.ajax({
                      type: 'POST',
                      url: '/data',
                      data: activity,
                      success: function(event) {
                        let numberOfEvent = event.length - 2;
                        shuffleArray(event);
                        for (let i = 0; i < numberOfEvent; i++) {
                          event.splice(event.length - 1, 1);
                        }
                        partialAgenda.splice(4, 0, event[0]);
                        partialAgenda.splice(5, 0, event[1]);
                        console.log(partialAgenda);

                        const agenda = partialAgenda.reduce(function(
                          acc,
                          cur,
                          i
                        ) {
                          acc[i] = cur;
                          return acc;
                        }, {});

                        $.ajax({
                          type: 'POST',
                          url: '/data/agenda',
                          data: agenda,
                          success: function(res) {
                            renderInfo();
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          });
        }
      };
      handleApiCalls();
    }
  });
};

$(() => {
  handleAgendaPage();
});
