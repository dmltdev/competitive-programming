package kata

func IsWilsonPrime(n int) bool {
    if n < 2 {
        return false
    }
    
    factorialModP := 1
    for i := 2; i < n; i++ {
        factorialModP = (factorialModP * i) % (n * n)
    }
    
    return (factorialModP + 1) % (n * n) == 0
}
