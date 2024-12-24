import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChristmasButton = ({ children, ...props }) => (
  <Button 
    className="bg-red-600 hover:bg-red-700 text-white shadow-lg transform transition hover:scale-105 mx-2"
    {...props}
  >
    {children}
  </Button>
);

const ChristmasQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState('initial');
  const [countryGuess, setCountryGuess] = useState('');
  const [capitalGuess, setCapitalGuess] = useState('');
  const [bandGuess, setBandGuess] = useState('');
  const [nameGuess, setNameGuess] = useState('');
  const [edSheeranGuess, setEdSheeranGuess] = useState('');

  const resetAllGuesses = () => {
    setCountryGuess('');
    setCapitalGuess('');
    setBandGuess('');
    setNameGuess('');
    setEdSheeranGuess('');
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 'initial':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce">🎄</span>
              <span className="text-4xl animate-bounce delay-100">🎄</span>
              <span className="text-4xl animate-bounce delay-200">🎄</span>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-6">Is it Christmas yet?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('areYouSure')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('patientMessage')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'patientMessage':
        return (
          <div className="text-center space-y-4">
            <p className="text-xl font-bold mb-4 text-red-600">Be patient, young padawan</p>
            <div className="relative mb-4">
              <img 
                src="/api/placeholder/300/200" 
                alt="Be patient"
                className="mx-auto rounded-lg border-4 border-green-600"
              />
              <span className="absolute top-2 left-2 animate-spin text-3xl">❄️</span>
              <span className="absolute top-2 right-2 animate-spin text-3xl">❄️</span>
            </div>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('initial')}>Try Again</ChristmasButton>
            </div>
          </div>
        );

      case 'areYouSure':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce">🎁</span>
              <span className="text-4xl animate-bounce delay-100">🎁</span>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-6">Are you sure?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('really')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('patientMessage')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'really':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-spin">❄️</span>
              <span className="text-4xl animate-spin delay-100">❄️</span>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-6">Are you 101% sure?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('guessCountry')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('patientMessage')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'guessCountry':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-4">
              🌺🌴🏞☀
            </div>
            <Input
              value={countryGuess}
              onChange={(e) => setCountryGuess(e.target.value)}
              placeholder="Which country is this?"
              className="text-center border-2 border-red-600 focus:border-green-600 focus:ring-green-600 max-w-xs mx-auto"
            />
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  const guess = countryGuess.toLowerCase().trim();
                  if (guess === 'spain') {
                    setCurrentQuestion('countrySuccess');
                  } else {
                    setCountryGuess('');
                    setCurrentQuestion('countryWrong');
                  }
                }}
              >
                Submit
              </ChristmasButton>
            </div>
          </div>
        );

      case 'countryWrong':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">❌</div>
            <p className="text-xl font-bold mb-4 text-red-600">Provaci ancora, sarai più fortunato</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('guessCountry')}>Try Again</ChristmasButton>
            </div>
          </div>
        );

      case 'countrySuccess':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-xl font-bold mb-4 text-green-600">Well done, we're getting there!</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('askCapital')}>Continue</ChristmasButton>
            </div>
          </div>
        );

      case 'askCapital':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-4">
              🏰🇪🇸
            </div>
            <Input
              value={capitalGuess}
              onChange={(e) => setCapitalGuess(e.target.value)}
              placeholder="What is the capital of Spain?"
              className="text-center border-2 border-red-600 focus:border-green-600 focus:ring-green-600 max-w-xs mx-auto"
            />
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  const guess = capitalGuess.toLowerCase().trim();
                  if (guess === 'madrid') {
                    setCurrentQuestion('capitalSuccess');
                  } else {
                    setCapitalGuess('');
                    setCurrentQuestion('countryWrong');
                  }
                }}
              >
                Submit
              </ChristmasButton>
            </div>
          </div>
        );

      case 'capitalSuccess':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-xl font-bold mb-4 text-green-600">Well done, we're getting there!</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('askBand')}>Continue</ChristmasButton>
            </div>
          </div>
        );

      case 'askBand':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-4">
              🎸🤘
            </div>
            <Input
              value={bandGuess}
              onChange={(e) => setBandGuess(e.target.value)}
              placeholder="Name the most famous German Industrial Metal band"
              className="text-center border-2 border-red-600 focus:border-green-600 focus:ring-green-600 max-w-xs mx-auto"
            />
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  const guess = bandGuess.toLowerCase().trim();
                  if (guess === 'rammstein') {
                    setCurrentQuestion('bandSuccess');
                  } else {
                    setBandGuess('');
                    setCurrentQuestion('bandWrong');
                  }
                }}
              >
                Submit
              </ChristmasButton>
            </div>
          </div>
        );

      case 'bandWrong':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">❌</div>
            <p className="text-xl font-bold mb-4 text-red-600">Nein, nein, nein!</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('askBand')}>Try Again</ChristmasButton>
            </div>
          </div>
        );

      case 'bandSuccess':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">🎸</div>
            <p className="text-xl font-bold mb-4 text-green-600">Du hast mich die richtige Antwort gesagt!</p>
            <h2 className="text-xl font-bold text-center text-red-600">Do you like Rammstein?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('rammsteinYes')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('rammsteinNo')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'rammsteinYes':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">😲</div>
            <h2 className="text-xl font-bold text-center text-red-600">This was unexpected, are you sure?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('whoAreYou')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('tryElse')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'whoAreYou':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">🤔</div>
            <h2 className="text-xl font-bold text-center text-red-600">Who are you?</h2>
            <Input
              value={nameGuess}
              onChange={(e) => setNameGuess(e.target.value)}
              placeholder="Enter name..."
              className="text-center border-2 border-red-600 focus:border-green-600 focus:ring-green-600 max-w-xs mx-auto"
            />
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  const guess = nameGuess.toLowerCase().trim();
                  if (guess === 'cristina') {
                    setCurrentQuestion('bandSuccess');
                  } else {
                    setNameGuess('');
                    setCurrentQuestion('wrongPerson');
                  }
                }}
              >
                Submit
              </ChristmasButton>
            </div>
          </div>
        );

      case 'wrongPerson':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">🚫</div>
            <p className="text-xl font-bold text-center text-red-600">Get out of here you Industrial Metal-loving individual, we don't take kindly your kind here!</p>
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  resetAllGuesses();
                  setCurrentQuestion('initial');
                }}
              >
                Try Again
              </ChristmasButton>
            </div>
          </div>
        );

      case 'rammsteinNo':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">👍</div>
            <p className="text-xl font-bold mb-4 text-green-600">I thought so, let's try something else</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('edSheeranQuestion')}>Continue</ChristmasButton>
            </div>
          </div>
        );

      case 'tryElse':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">👍</div>
            <p className="text-xl font-bold mb-4 text-green-600">I thought so, let's try something else</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('edSheeranQuestion')}>Continue</ChristmasButton>
            </div>
          </div>
        );

      case 'edSheeranQuestion':
        return (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold mb-4 text-red-600">What about this artist?</h2>
            <div className="text-4xl mb-4 space-y-2">
              <div>💝 ➗ ✖️ ➕ 🎸</div>
              <div>🗺️ 🇮🇪 👧 ☘️ 🍺</div>
              <div>💃 🎶 🎭 ❤️ 🌃</div>
            </div>
            <Input
              value={edSheeranGuess}
              onChange={(e) => setEdSheeranGuess(e.target.value)}
              placeholder="Who is this artist?"
              className="text-center border-2 border-red-600 focus:border-green-600 focus:ring-green-600 max-w-xs mx-auto"
            />
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  const guess = edSheeranGuess.toLowerCase().trim();
                  if (guess === 'ed sheeran') {
                    setCurrentQuestion('edSheeranSuccess');
                  } else {
                    setEdSheeranGuess('');
                    setCurrentQuestion('edSheeranWrong');
                  }
                }}
              >
                Submit
              </ChristmasButton>
            </div>
          </div>
        );

      case 'edSheeranWrong':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">❌</div>
            <p className="text-xl font-bold mb-4 text-red-600">Nein, nein, nein!</p>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('edSheeranQuestion')}>Try Again</ChristmasButton>
            </div>
          </div>
        );

      case 'edSheeranSuccess':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">✨</div>
            <h2 className="text-xl font-bold text-center text-red-600">Do you like Ed Sheeran?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('edSheeranLikeYes')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('bandSuccess')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'edSheeranLikeYes':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">🎵</div>
            <h2 className="text-xl font-bold text-center text-red-600">Would you like to go see Ed Sheeran in Spain?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('concertWin')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('unexpectedNo')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'unexpectedNo':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">😲</div>
            <h2 className="text-xl font-bold text-center text-red-600">This was unexpected, are you sure?</h2>
            <div className="flex justify-center gap-4">
              <ChristmasButton onClick={() => setCurrentQuestion('rammsteinConcert')}>Yes</ChristmasButton>
              <ChristmasButton onClick={() => setCurrentQuestion('edSheeranLikeYes')}>No</ChristmasButton>
            </div>
          </div>
        );

      case 'rammsteinConcert':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">🤘🎸✨</div>
            <h2 className="text-xl font-bold text-center text-red-600">Amazing, in that case we are going to see Rammstein in Munich!</h2>
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  resetAllGuesses();
                  setCurrentQuestion('initial');
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                Changed your mind?
              </ChristmasButton>
            </div>
          </div>
        );

      case 'concertWin':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce">⭐</span>
              <span className="text-4xl animate-bounce delay-100">✨</span>
              <span className="text-4xl animate-bounce delay-200">🎵</span>
            </div>
            <h2 className="text-xl font-bold text-center text-green-600">
              Congratulations, you have won a trip to Spain to go see Ed Sheeran in concert in Madrid!
            </h2>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('kissHusband')}>Continue</ChristmasButton>
            </div>
          </div>
        );

      case 'kissHusband':
        return (
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">💋</div>
            <h2 className="text-xl font-bold text-center text-red-600">
              To proceed with the ticket collection, please kiss your husband!
            </h2>
            <div className="flex justify-center">
              <ChristmasButton onClick={() => setCurrentQuestion('success')}>Done!</ChristmasButton>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce">🎄</span>
              <span className="text-4xl animate-bounce delay-100">🎅</span>
              <span className="text-4xl animate-bounce delay-200">🎄</span>
            </div>
            <h2 className="text-2xl font-bold text-green-600">Buon Natale, patatino mio!</h2>
            <div className="flex justify-center">
              <ChristmasButton 
                onClick={() => {
                  resetAllGuesses();
                  setCurrentQuestion('initial');
                }}
              >
                Start Over
              </ChristmasButton>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-xl border-2 border-red-600 mt-8 mb-8">
      <div className="absolute top-2 left-0 right-0 flex justify-center gap-4">
        <span className="text-3xl animate-bounce">🎄</span>
        <span className="text-3xl animate-bounce delay-100">⭐</span>
        <span className="text-3xl animate-bounce delay-200">🎄</span>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
        <span className="text-2xl">🎁</span>
        <span className="text-2xl">🎅</span>
        <span className="text-2xl">🎁</span>
      </div>
      <CardContent className="py-12">
        {renderQuestion()}
      </CardContent>
    </Card>
  );
};

export default ChristmasQuiz;