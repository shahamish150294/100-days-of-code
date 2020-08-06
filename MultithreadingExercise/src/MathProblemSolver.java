import java.math.BigInteger;

public class MathProblemSolver {

    public static void main(String arg[]){

        // Performs 100! + 100000!
        FactorialCalculatingThread thread1 = new FactorialCalculatingThread(100);
        FactorialCalculatingThread thread2 = new FactorialCalculatingThread(100000);

        thread1.setName("Thread 1");
        thread2.setName("Thread 2");

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Adding results from both the threads:");
        BigInteger result = thread1.getResult().add(thread2.getResult());
        System.out.println(result);
    }

    private static class FactorialCalculatingThread extends Thread {
        private BigInteger result = BigInteger.ONE;
        private long num;

        public FactorialCalculatingThread(long num) {
            this.num = num;
        }

        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName() + " has started computing factorial of " + num);
            factorialCalc(num);
            System.out.println(Thread.currentThread().getName() + " is about to exit");
        }


        public void factorialCalc(long num) {
            //Ref: https://www.codespeedy.com/factorial-of-a-large-number-using-biginteger-in-java/
            BigInteger f = new BigInteger("1");
            for (int i = 2; i <= num; i++)
                f = f.multiply(BigInteger.valueOf(i));
            result = f;
        }

        public BigInteger getResult() { return result; }
    }
}