import { DebugInfo } from '../../types';
import { Instruction } from '../instruction';
import { OPCODE, RD, FUNCT3, RS2, RS1, FUNCT2, RS3 } from '../fields';

/** Generic R4-Type instruction. */
export class R4Type extends Instruction {
  /** Instruction opcode. */
  readonly opcode: number;
  /** Instruction destination register. */
  readonly rd: number;
  /** Instruction function 3 value. */
  readonly funct3: number;
  /** Instruction source register 1. */
  readonly rs1: number;
  /** Instruction source register 2. */
  readonly rs2: number;
  /** Instruction function 2 value. */
  readonly funct2: number;
  /** Instruction source register 3. */
  readonly rs3: number;

  /**
   * Creates a new generic R4-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param rd        - Instruction destination register.
   * @param funct3    - Instruction function 3 value.
   * @param rs1       - Instruction source register 1.
   * @param rs2       - Instruction source register 2.
   * @param funct2    - Instruction function 2 value.
   * @param rs3       - Instruction source register 3.
   */
  constructor(
    debugInfo: DebugInfo,
    name: string,
    opcode: number,
    rd: number,
    funct3: number,
    rs1: number,
    rs2: number,
    funct2: number,
    rs3: number
  ) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.rd = rd;
    this.funct3 = funct3;
    this.rs1 = rs1;
    this.rs2 = rs2;
    this.funct2 = funct2;
    this.rs3 = rs3;
  }

  /** {@inheritdoc} */
  build(): void {
    this.code.set(OPCODE, this.opcode);
    this.code.set(RD, this.rd);
    this.code.set(FUNCT3, this.funct3);
    this.code.set(RS1, this.rs1);
    this.code.set(RS2, this.rs2);
    this.code.set(FUNCT2, this.funct2);
    this.code.set(RS3, this.rs3);
  }
}
