if [ $1 ]
  then
    babel --presets es2015 -w --out-file tmp.js $1 &
    node-dev tmp.js
else
  echo 'Usage: ./run.sh some.js'
fi
