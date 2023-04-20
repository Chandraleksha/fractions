class Fraction:
    def__init__(self, numerator, denominator):
       self.numerator = numerator
       self.denominator = denominator

    def add(self,other):
        common_denominator = self.denominator * other.denominator
        new_numerator = self.numerator * other.denominator + other.numerator * self.denominator
        return fraction(new_numerator, common_denominator)
