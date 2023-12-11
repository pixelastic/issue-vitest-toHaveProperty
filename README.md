## jest 29.7.0

![image-20231211174332600](./image-20231211174332600.png)

## vitest 0.12

Good error message, with a diff between expected and received.

![image-20231211170606415](./image-20231211170606415.png)

## vitest 0.19

![image-20231211173033927](./image-20231211173033927.png)

Less explicit error message, but still letting me see the whole object

## vitest 0.21 (?)

![image-20231211173127875](./image-20231211173127875.png)

Seems like a regression because now the test is passing (?)

## vitest 0.23

![image-20231211173328343](./image-20231211173328343.png)

Test is correctly failing again, but I don't have any context about what went wrong.

## vitest 0.26

![image-20231211173619857](./image-20231211173619857.png)

There is now an error in diffs

## vitest 0.30

![image-20231211173753784](./image-20231211173753784.png)

No more errors, the object is displayed, but no diff

## vitest 0.31

![image-20231211173832954](./image-20231211173832954.png)

Back to no display at all, hard to debug.

## vitest 0.34

![image-20231211173949123](./image-20231211173949123.png)

Now with a confusing "Compared values have no visual difference." message.

