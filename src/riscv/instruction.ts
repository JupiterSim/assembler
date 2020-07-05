import { DebugInfo } from '../types';
import { Code } from './code';

/** Build error. */
export class BuildError extends Error {
  /** Debug information */
  readonly debugInfo: DebugInfo;

  /**
   * Creates a new expression error.
   *
   * @param message   - Error message.
   * @param debugInfo - Expression debug information.
   */
  constructor(message: string, debugInfo: DebugInfo) {
    super(message);
    Object.setPrototypeOf(this, BuildError.prototype);
    this.debugInfo = debugInfo;
  }
}

/** Generic RISC-V instruction. */
export abstract class Instruction {
  /** Debug information. */
  readonly debugInfo: DebugInfo;
  /** Machine code. */
  readonly code: Code;
  /** Intruction name. */
  readonly name: string;

  /**
   * Creates a generic RISC-V instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   */
  constructor(debugInfo: DebugInfo, name: string) {
    this.debugInfo = debugInfo;
    this.code = new Code();
    this.name = name;
  }

  /**
   * Builds machine code.
   *
   * @param pc - Program counter value.
   */
  abstract build(pc: number): void;
}
