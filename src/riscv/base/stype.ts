import { DebugInfo } from '../../types';
import { Expression } from '../../expr';
import { between } from '@jupitersim/helpers';
import { Instruction, BuildError } from '../instruction';
import { OPCODE, IMM_4_0, FUNCT3, RS1, RS2, IMM_11_5 } from '../fields';

/** Generic S-Type instruction. */
export class SType extends Instruction {
  /** Instruction opcode. */
  readonly opcode: number;
  /** Instruction function 3 value. */
  readonly funct3: number;
  /** Instruction source register 1. */
  readonly rs1: number;
  /** Instruction source register 2. */
  readonly rs2: number;
  /** Instruction immediate expression. */
  readonly imm: Expression;

  /**
   * Creates a new generic S-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param funct3    - Instruction function 3 value.
   * @param rs1       - Instruction source register 1.
   * @param rs2       - Instruction source register 2.
   * @param imm       - Instruction immediate expresion.
   */
  constructor(
    debugInfo: DebugInfo,
    name: string,
    opcode: number,
    funct3: number,
    rs1: number,
    rs2: number,
    imm: Expression
  ) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.funct3 = funct3;
    this.rs1 = rs1;
    this.rs2 = rs2;
    this.imm = imm;
  }

  /** {@inheritdoc} */
  build(pc: number): void {
    const imm = this.imm.build(pc, []);
    if (!between(imm, -2048, 2047))
      throw new BuildError(`immediate ${imm} out of range, should be between [-2048, 2047]`, this.debugInfo);
    this.code.set(OPCODE, this.opcode);
    this.code.set(IMM_4_0, imm);
    this.code.set(FUNCT3, this.funct3);
    this.code.set(RS1, this.rs1);
    this.code.set(RS2, this.rs2);
    this.code.set(IMM_11_5, imm >>> 5);
  }
}
