var spd = 0;
var y4 = 400;
var x4 = 400;
var x = 95;
var jumpframes = 0;
var y = 250;
var x1 = 100;
var y1 = 300;
var touch = 0;
var level = 'titlescreen';
var screen = 5
var x2 = 500;
var y2 = 350;
var x3 = 500;
var y3 = 300;
var gt = 1
var rng1 = 1;
var frames = 0;
var attack = 1;
var health = 50;
var health1 = 100;
var rng = 0;
var shoot = 1;
var gt1 = 0;
var boxs = 1;
var inframes = 0;
var moveawayframes = 0;
var moveawayframes1 = 0;
var move = 0;
var frames = 0;
var lk = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 250, 250);
  if (level == 'titlescreen') {
    fill(250, 0, 250);
    textSize(100)
    textAlign(CENTER)
    text('Sticky Blicky', 400, 200);
    ellipse(400, 400, 100, 100);
    textSize(20)
    fill(0, 0, 0)
    text('Play!', 400, 400)
    mathx = mouseX - 400
    mathy = mouseY - 400
    if (mathx < 100) {
      if (mathx > 0 - 100) {
        if (mathy < 100) {
          if (mathy > 0 - 100) {
            level = 'levelselect';
          }
        }
      }
    }
  } else {
    if (level == 'levelselect') {
      spd = 0;
      getItem('cl');
      fill(230, 0, 230);
      ellipse(100, 150, 100, 100);
      ellipse(400, 150, 100, 100);
      ellipse(700, 150, 100, 100);
      fill(0, 0, 250);
      text('Level 1', 100, 150);
      text('Level 2', 400, 150);
      text('Level 3', 700, 150);
      mathx = mouseX - 100;
      mathy = mouseY - 150;
      if (mathx < 100) {
        if (mathx > 0 - 100) {
          if (mathy < 100) {
            if (mathy > 0 - 100) {
              level = '1';
              screen = 1;
              health1 = 100;
              health = 50;
              x = 95;
              y = 195;
              inframes = 0;
              textAlign(LEFT)
            }
          }
        }
      }
      mathx = mouseX - 400;
      mathy = mouseY - 150;
      if (mathx < 100) {
        if (mathx > 0 - 100) {
          if (mathy < 100) {
            if (mathy > 0 - 100) {
              level = '2';
              screen = 1;
              health1 = 100;
              health = 50;
              x = 50;
              y = 650;
              x3 = 400;
              y3 = 400;
              x4 = 400
              y4 = 200;
              inframes = 0;
              boxs = 1;
              move = 1;
              frames = 1200;
              textAlign(LEFT)
            }
          }
        }
      }
      mathx = mouseX - 700;
      mathy = mouseY - 150;
      if (mathx < 100) {
        if (mathx > 0 - 100) {
          if (mathy < 100) {
            if (mathy > 0 - 100) {
              level = '3';
              screen = 1;
              health1 = 100;
              health = 50;
              x = 50;
              y = 650;
              x3 = 400;
              y3 = 400;
              x4 = 400;
              y4 = 200;
              inframes = 0;
              boxs = 1;
              move = 1;
              frames = 1200;
              textAlign(LEFT)
            }
          }
        }
      }
    } else {
      if (level == 3) {
        if (screen == 2) {
          level = 1;
          screen = 4;
           x = 100;
            y = 250;
          x2 = 500;
          y2 = 350;
          x3 = 500;
          y3 = 300;
      
                     health1 = 100;
        }


        if (y > 800) {
          level = 1;
          screen = 6;
        }
        if (screen == 1) {
          if (x > 700) {
            screen = 2;
            x = 400;
            y = 500;
          }
          x1 = 50;
          y1 = 700;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }

          x1 = 200;
          y1 = 500;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 600;
          y1 = 400;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }


        }
      }
      if (level == 2) {
        if (health < 5) {
          screen = 'titlescreen';
          screen = 99
        }
        inframes = inframes - 1;
        if (screen == 4) {
          rect(x3, y3, 100, 50)
          if (shoot == 0) {
            shoot = 1;
            move = 2;
            x4 = x3;
            y4 = y3;
          }
          if (shoot == 1) {
            rect(x4, y4, 50, 50)
          }
          if (move == 1) {
            y4 = y4 - spd;
          }
          if (move == 2) {
            y4 = y4 + spd;
          }
          if (move == 3) {
            y4 = y4 + spd;
            x4 = x4 - spd;
          }
          //down,left                                         
          if (move == 4) {
            y4 = y4 + spd;
            x4 = x4 + spd
          }
          //down,right   
          if (move == 5) {
            y4 = y4 - spd;
            x4 = x4 + spd
          }
          //up,right  
          if (move == 6) {
            y4 = y4 - spd;
            x4 = x4 - spd
          }
          //up,left  
          if (x3 < x4) {
            x3 = x3 + spd + spd + random(spd)
          }
          if (x3 > x4) {
            x3 = x3 - spd - spd - random(spd)
          }
          if (health < 15) {
            level = 1;
            screen = 6
          }

          if (x > 750) {
            x = 750
          }
          if (x < 50) {
            x = 50
          }
          mathx = x3 - x4
          mathy = y3 - y4;
          frames = frames - 1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  if (x4 < x3) {
                    move = 4;
                    y4 = y4 + 40;
                  } else {
                    if (x4 > x3) {
                      move = 3;
                      y4 = y4 + 40;
                    } else {
                      move = 2
                    }
                  }
                }
              }
            }
          }
          if (y4 > 780) {
            health = health - 10;
            shoot = 0;
          }
          mathx = x - x4
          mathy = y - y4;
          if (mathx < 50) {
            if (mathx > 0 - 50) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  move = 1;
                  if (key == 'd') {
                    move = 5;
                    y4 = y4 - 40;
                    spd = spd + 0.25
                  } else {
                    if (key == 'a') {
                      move = 6;
                      y4 = y4 - 40;
                      spd = spd + 0.25
                    } else {
                      if (lk == 'd') {
                        move = 5;
                        y4 = y4 - 40;
                        spd = spd + 0.25
                      }
                      if (lk == 'a') {
                        move = 6;
                        y4 = y4 - 40;
                        spd = spd + 0.25
                      }
                    }
                  }
                }
              }
            }
          }
          if (x4 > 750) {
            if (move == 4) {
              move = 3;
            }
            if (move == 5) {
              move = 6;
            }
          }

          if (x4 < 50) {
            if (move == 3) {
              move = 4;
            }
            if (move == 6) {
              move = 5;
            }
          }


          y3 = 100;
          if (frames < 0) {
            level = 1;
            screen = 5;
            y = 100;
            x = 50;
          }
          if (x > x3) {
            gt = 1
          }
          if (x < x3) {
            gt = 2
          }
          fill(250, 0, 0)

          x1 = 50;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 155;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 260;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 365;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 470;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 575;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 575;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 680;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 785;
          y1 = 700;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }

          rectMode(CORNER)
          fill(0, 250, 0)
          text('Time Left:', 0, 700)
          rect(100, 700, frames / 2, 10)
          rectMode(CENTER)
        }
        if (screen == 3) {
          if (x > 700) {
            screen = 4;
            x = 100;
            y = 350;
            x3 = 400;
            y = 400;
            spd = 6;
          }
          x1 = 100
          y1 = 750;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 300
          y1 = 550;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 700
          y1 = 550;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
        }
        if (y > 800) {
          level = 'titlescreen';
          screen = 99;
        }
        if (screen == 2) {
          if (gt == 2) {
            x3 = x3 - 3;
          }
          if (x > 700) {
            screen = 3;
            x = 200;
            y = 650;

          }
          if (x3 > 750) {
            gt = 2;
          }
          if (x3 < 50) {
            gt = 1;
          }
          if (gt == 1) {
            x3 = x3 + 3;
          }
          x1 = 100
          y1 = 750;

          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 205
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 310
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 415
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 415
          y1 = 600
          fill(250, 250, 0)
          if (boxs == 1) {
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    inframes = 120;
                    boxs = 0;
                  }
                }
              }
            }
          }
          x1 = 520
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 625
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 730
          y1 = 750
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          if (health1 < 100) {
            if (health1 > 5) {
              rectMode(CORNER)
              fill(250, 0, 0)
              rect(x3 - 50, y3 - 40, health1, 10)
              rectMode(CENTER)
            }
          }
          if (health1 > 5) {
            fill(0, 0, 250);
            rect(x3, y3, 100, 50)
            fill(20, 250, 2)
            ellipse(x3 - 20, y3, 10, 10)
            ellipse(x3 + 20, y3, 10, 10)
            mathx = x - x3
            mathy = y - y3;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 < y3) {
                      health1 = health1 - 50;
                      jumpframes = 15;
                      if (inframes > 0) {
                        health1 = health1 - 50
                      }
                    }
                    if (y + 45 > y3) {
                      if (x > x3) {
                        x = x + 10;
                        health = health - 1;
                        if (inframes > 0) {
                          health1 = health1 - 100;
                          health = health + 1
                        }
                      }
                      if (x < x3) {
                        x = x - 10;
                        health = health - 1;
                        if (inframes > 0) {
                          health1 = health1 - 100;
                          health = health + 1
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (screen == 1) {
          if (gt == 2) {
            x3 = x3 - 3;
          }
          if (x3 > 750) {
            gt = 2;
          }
          if (x3 < 50) {
            gt = 1;
          }
          if (gt == 1) {
            x3 = x3 + 3;
          }
          y3 = 600
          x1 = 50
          y1 = 700;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 700
          y1 = 500;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 595
          y1 = 550;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 595
          y1 = 500;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = x3
          y1 = y3;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = x3
          y1 = y3 - 300;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 100
          y1 = 200;
          fill(250, 0, 0)
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10;
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          if (y < 0) {
            screen = 2;
            x = 100;
            y = 700;
            x3 = 400;
            y3 = 700;
            gt = 1;
          }
        }



      }
      if (level == 1) {
        if (700 < y) {
          screen = 6;
          frames = 120;
        }
      }
      rectMode(CORNER)
      fill(250, 0, 0)
      rect(x - 25, y - 40, health, 10)
      fill(0, 0, 250);
      rectMode(CENTER)
      if (health < 0) {
        screen = 6;
        textAlign(CENTER)
      }
      if (inframes > 0) {
        fill(0, 250, 0)
      }
      rect(x, y, 50, 50)
      rect(x - 18, y - 20, 10, 10)
      fill(0, 250, 0)
      if (inframes > 0) {
        fill(0, 250, 0)
      }
      rect(x - 18, y - 20, 5, 5)
      fill(0, 0, 250)
      if (inframes > 0) {
        fill(0, 250, 0)
      }
      rect(x + 18, y - 20, 10, 10)
      fill(0, 250, 0)
      if (inframes > 0) {
        fill(0, 250, 0)
      }
      rect(x + 18, y - 20, 5, 5)
      rect(x, y - 10, 8, 8);
      rect(x, y - 10, 4, 4);
      rect(x, y + 10, 15, 11)
      if (key == 'd') {
        x = x + 10;
        if (level == 2) {
          x = x + spd;
          lk = 'd'
        }
      }
      if (key == 'a') {
        x = x - 10;
        if (level == 2) {
          x = x - spd;
          lk = 'a';
        }
      }
      if (key == 'w') {
        if (touch == 1) {
          jumpframes = 15;
        }
      }
      if (key == 'w') {
        if (level == 2) {
          if (screen == 4) {
            jumpframes = 0;
          }
        }
      }
      if (jumpframes > 0) {
        y = y - 16;
      }
      jumpframes = jumpframes - 1
      if (touch == 0) {
        y = y + 5
      }
      touch = 0
      if (level == 1) {
        if (screen == 1) {
          if (x > 800) {
            screen = 2;
            x = 200;
            y = 350;
          }
          x1 = 100;
          y1 = 300;
          if (level == 1) {
            rect(x1, y1, 100, 50);
            touch = 0;
            mathx = x - x1

            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                        touch = 0;
                      }
                      if (x < x1) {
                        x = x - 10;
                        touch = 0;
                      }
                    }
                  }
                }
              }
            }
            textSize(13);
            fill(250, 0, 0)
            text('Use WASD to move.To stick to walls holad the direction going into the wall then jump to get off.You can stick to only red walls.', 0, 50);
            x1 = 295;
            y1 = 450;
            fill(250, 0, 0)
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                      }
                      if (x < x1) {
                        x = x - 10;
                      }
                    }
                  }
                }
              }
            }
            x1 = 400;
            y1 = 450;
            fill(250, 0, 0)
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                      }
                      if (x < x1) {
                        x = x - 10;
                      }
                    }
                  }
                }
              }
            }
            x1 = 505;
            y1 = 450;
            fill(250, 0, 0)
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                      }
                      if (x < x1) {
                        x = x - 10;
                      }
                    }
                  }
                }
              }
            }
            x1 = 610;
            y1 = 450;
            fill(250, 0, 0)
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                      }
                      if (x < x1) {
                        x = x - 10;
                      }
                    }
                  }
                }
              }
            }
            x1 = 715;
            y1 = 450;
            fill(250, 0, 0)
            rect(x1, y1, 100, 50)
            mathx = x - x1
            mathy = y - y1;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y + 45 > y1) {
                      if (x > x1) {
                        x = x + 10;
                      }
                      if (x < x1) {
                        x = x - 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (screen == 2) {
      if (level == 1) {
        fill(250, 0, 0);
        if (x > 700) {
          screen = 3;
          x = 50;
          y = 300;
          x2 = 500;
          y2 = 350;
          x3 = 500;
          y3 = 300;
        }
        text('In this game there is a lot of platforming', 50, 50);
        fill(250, 0, 0)
        x1 = 500;
        y1 = 400;
        rect(x1, y1, 100, 50);
        touch = 0;
        mathx = x - x1;
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        fill(250, 0, 0)
        x1 = 700;
        y1 = 340;
        rect(x1, y1, 100, 50);
        mathx = x - x1;
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        fill(250, 0, 0)
        x1 = 200;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (level == 1) {
      if (screen == 5) {
        textSize(30);
        textAlign(CENTER);
        text('Touch the gold box to win', 400, 250)
        x1 = 100;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 205;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 310;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 415;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 520;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 625;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 730;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        fill(250, 250, 0)
        x1 = 730;
        y1 = 300;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                level = 'titlescreen';
              }
            }
          }
        }
      }
    }

    if (level == 1) {
      if (screen == 4) {
        if (x < 0) {
          x = 10;
        }
        if (x > 800) {
          x = 790;
        }
        if (health1 < 100) {
          if (health1 > 0) {
            rectMode(CORNER)
            fill(250, 0, 0)
            rect(x3 - 50, y3 - 40, health1, 10)
            rectMode(CENTER)
          }
        }
        if (gt == 2) {
          x2 = x2 - 5;
          x3 = x3 - 5;
        }
        if (gt > 0) {
          if (x2 > 750) {
            gt = 2;
            rng1 = 1;
            rng1 = random(rng1);
            if (rng1 < 0.3) {
              attack = 3;
              gt1 = gt;
              gt = 0
            }
          }
        }
        if (gt > 0) {
          if (x2 < 50) {
            gt = 1;
            rng1 = 1;
            rng1 = random(rng1);
            if (rng1 < 0.3) {
              attack = 3;
              gt1 = gt;
              gt = 0;
            }
          }
        }
        if (y3 < 0 - 10) {
          attack = 4
        }
        if (attack == 4) {
          y3 = y3 + 3;
          y2 = y2 + 3;
          if (x3 > x) {
            x3 = x3 - 5;
            x2 = x2 - 5;
          }
          if (x3 < x) {
            x2 = x2 + 5;
            x3 = x3 + 5;
          }
        }
        if (y3 > 350) {
          y3 = 300;
          y2 = 350;
          attack = 1;
          gt = gt1
        }
        if (gt == 1) {
          x2 = x2 + 5;
          x3 = x3 + 5;
        }
        if (attack == 3) {
          y3 = y3 - 3;
          y2 = y2 - 3;
        }
        fill(250, 0, 0)
        x1 = 50;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 155;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 260;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 365;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 470;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 575;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 575;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 680;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        x1 = 785;
        y1 = 400;
        rect(x1, y1, 100, 50)
        mathx = x - x1
        mathy = y - y1;
        if (mathx < 100) {
          if (mathx > 0 - 100) {
            if (mathy < 50) {
              if (mathy > 0 - 50) {
                touch = 1;
                if (y + 45 > y1) {
                  if (x > x1) {
                    x = x + 10
                  }
                  if (x < x1) {
                    x = x - 10;
                  }
                }
              }
            }
          }
        }
        if (moveawayframes > 0) {
          x = x - 10;
        }
        if (moveawayframes1 > 0) {
          x = x + 10;
        }
        moveawayframes = moveawayframes - 1
        moveawayframes1 = moveawayframes1 - 1
        if (health1 < 5) {
          screen = 5;
          frames = 120;
          x = 100;
          y = 30;
        }
        if (health1 > 0) {
          fill(0, 0, 250);
          rect(x3, y3, 100, 50)
          fill(20, 250, 2)
          frames = frames + 1;
          if (rng > 130) {
            rng = 130
          }
          if (frames > 100) {
            if (attack == 1) {
              frames = 0;
              attack = 2;
            }
            if (attack == 2) {
              if (frames == 0) {
                frames = 0;
              } else {
                frames = 0;
                attack = 1;
              }
            }
          }
          if (1 == attack) {
            fill(250, 0, 0)
          }
          if (2 == attack) {
            fill(250, 70, 250)
          }
          ellipse(x3 - 20, y3, 10, 10)
          ellipse(x3 + 20, y3, 10, 10)
          mathx = x - x3
          mathy = y - y3;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y < y3) {
                    if (attack == 2) {
                      health1 = health1 - 10;
                      jumpframes = 15;
                    } else {
                      if (gt == 1) {
                        moveawayframes1 = 10;
                        health = health - 3;
                      }
                      if (gt == 2) {
                        moveawayframes = 10;
                        health = health - 3
                      }
                      jumpframes = 10
                    }
                  }
                  if (y + 45 > y3) {
                    if (x > x3) {
                      x = x + 20
                    }
                    if (x < x3) {
                      x = x - 20;
                    }
                  }
                }
              }
            }
          }
          fill(0, 0, 250);
          rect(x2, y2, 100, 50)
          fill(20, 250, 2)
          mathx = x - x2
          mathy = y - y2;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  if (gt == 0) {
                    health = health - 0.5
                  }
                  touch = 1;
                  if (y + 45 > y2) {
                    if (x > x2) {
                      x = x + 20;
                      health = health - 1;
                    }
                    if (x < x2) {
                      x = x - 20;
                      health = health - 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (screen == 3) {
        if (level == 1) {
          if (x > 700) {
            screen = 4;
            x = 50;
            y = 350;
            health1 = 100;
            gt = 1;
          }
          if (health1 < 100) {
            if (health1 > 0) {
              rectMode(CORNER)
              fill(250, 0, 0)
              rect(x3 - 50, y3 - 40, health1, 10)
              rectMode(CENTER)
            }
          }
          fill(0, 0, 250);
          fill(250, 0, 0)
          text('Do not get hit by enemies(from the sides).Jump on their heads to deal damage', 50, 50)
          fill(250, 0, 0)
          touch = 0;
          if (gt == 2) {
            x2 = x2 - 3;
            x3 = x3 - 3;
          }
          if (x2 > 600) {
            gt = 2;
          }
          if (x2 < 200) {
            gt = 1;
          }
          if (gt == 1) {
            x2 = x2 + 3;
            x3 = x3 + 3;
          }
          x1 = 200;
          y1 = 400;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          fill(250, 0, 0)
          x1 = 305;
          y1 = 400;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          x1 = 515;
          y1 = 400;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          fill(250, 0, 0)
          x1 = 410;
          y1 = 400;
          rect(x1, y1, 100, 50)
          mathx = x - x1
          mathy = y - y1;
          if (mathx < 100) {
            if (mathx > 0 - 100) {
              if (mathy < 50) {
                if (mathy > 0 - 50) {
                  touch = 1;
                  if (y + 45 > y1) {
                    if (x > x1) {
                      x = x + 10
                    }
                    if (x < x1) {
                      x = x - 10;
                    }
                  }
                }
              }
            }
          }
          if (health1 > 0) {
            fill(0, 0, 250);
            rect(x3, y3, 100, 50)
            fill(20, 250, 2)
            ellipse(x3 - 20, y3, 10, 10)
            ellipse(x3 + 20, y3, 10, 10)
            mathx = x - x3
            mathy = y - y3;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y < y3) {
                      health1 = health1 - 50;
                      jumpframes = 15;
                    }
                    if (y + 45 > y3) {
                      if (x > x3) {
                        x = x + 20
                      }
                      if (x < x3) {
                        x = x - 20;
                      }
                    }
                  }
                }
              }
            }
            fill(0, 0, 250);
            rect(x2, y2, 100, 50)
            fill(20, 250, 2)
            mathx = x - x2
            mathy = y - y2;
            if (mathx < 100) {
              if (mathx > 0 - 100) {
                if (mathy < 50) {
                  if (mathy > 0 - 50) {
                    touch = 1;
                    if (y < y3) {
                      health1 = health1 - 10;
                      jumpframes = 15
                    }
                    if (y + 45 > y2) {
                      if (x > x2) {
                        x = x + 20;
                        health = health - 1;
                      }
                      if (x < x2) {
                        x = x - 20;
                        health = health - 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (level == 1) {
      if (screen == 6) {
        textSize(60);
        textAlign(CENTER);
        screen = 99;
        x = 999;
        y = 999;
        text('Game Over', 400, 250);
        frames = frames + 1;
        if (frames < 180) {
          level = 'titlescreen';
          screen = 99;
          x = 999;
          y = 999
        }
      }
    }
  }
}

function keyReleased() {
  key = 0;
}
