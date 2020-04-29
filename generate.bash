#!/bin/bash

for i in {1..300}
do
	output=$(eval "ng g component test-components/comp-a${i}")
done
