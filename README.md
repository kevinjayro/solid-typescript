# SOLID Design Principles

SOLID is a set of five object-oriented design principles that help developers create software that is **maintainable, scalable, and easier to extend**. When applied correctly, these principles reduce **technical debt** and improve long-term code quality.

The goal of this project is to move beyond theory by demonstrating **both incorrect implementations (violations)** and **correct implementations (solutions)** for each principle.

---

# What is SOLID?

SOLID is an acronym that represents five design principles introduced by **Robert C. Martin (Uncle Bob)** for improving object-oriented software design.

The five principles are:

* **S** — Single Responsibility Principle (SRP)
* **O** — Open/Closed Principle (OCP)
* **L** — Liskov Substitution Principle (LSP)
* **I** — Interface Segregation Principle (ISP)
* **D** — Dependency Inversion Principle (DIP)

Together, these principles guide developers toward building systems that are easier to **modify, test, and extend** without breaking existing functionality.

---

# Principles Overview

## Single Responsibility Principle (SRP)

A class should have **only one reason to change**, meaning it should focus on a single responsibility or concern.

When a class handles multiple responsibilities, changes in one area may unintentionally affect others, increasing coupling and maintenance complexity.

---

## Open/Closed Principle (OCP)

Software entities should be **open for extension but closed for modification**.

This means that new functionality should be added **without modifying existing code**, typically through abstraction, interfaces, or polymorphism.

---

## Liskov Substitution Principle (LSP)

Objects of a subclass should be **replaceable with objects of their base class without altering the correctness of the program**.

Violating this principle usually leads to unexpected behavior when polymorphism is used.

---

## Interface Segregation Principle (ISP)

Clients should **not be forced to depend on interfaces they do not use**.

Large, general-purpose interfaces should be split into smaller, more specific ones to avoid unnecessary dependencies.

---

## Dependency Inversion Principle (DIP)

High-level modules should **not depend on low-level modules**. Both should depend on **abstractions**.

By depending on abstractions instead of concrete implementations, systems become more flexible and easier to modify.

---

## Repository Structure

This repository is organized to make learning SOLID principles easy and practical.  
Each principle has its own folder under `examples/`, containing two implementations:

- **Violation** – an **incorrect implementation** that breaks the principle, illustrating common pitfalls.  
- **Solution** – a **correct implementation** following the principle, demonstrating best practices.

### Examples

| Principle | Examples |
|-----------|----------|
| **SRP** | [View](./examples/01-srp) |
| **OCP** | [View](./examples/02-ocp) |
| **LSP** | [View](./examples/03-lsp) |
| **ISP** | [View](./examples/04-isp) |
| **DIP** | [View](./examples/05-dip) |

---

## Purpose

This project demonstrates how to **apply SOLID principles** in TypeScript through practical examples, showing **both incorrect and correct implementations**.