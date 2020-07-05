import { DebugInfo } from '../../types';
import { Expression } from '../../expr';
import { between } from '@jupitersim/helpers';
import { Instruction, BuildError } from '../instruction';
import { OPCODE, RD, IMM_20, IMM_10_1, IMM_19_12, IMM_11J } from '../fields';

/** Generic J-Type instruction. */
export class JType extends Instruction {
  /** Instruction opcode. */
  readonly opcode: number;
  /** Instruction destination register. */
  readonly rd: number;
  /** Instruction immediate expression. */
  readonly imm: Expression;

  /**
   * Creates a new generic J-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param rd        - Instruction destination register.
   * @param imm       - Instruction immediate expresion.
   */
  constructor(debugInfo: DebugInfo, name: string, opcode: number, rd: number, imm: Expression) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.rd = rd;
    this.imm = imm;
  }

  /** {@inheritdoc} */
  build(pc: number): void {
    const imm = this.imm.build(pc, []);
    if (!between(imm, -1048576, 1048575)) throw new BuildError('jump too far', this.debugInfo);
    this.code.set(OPCODE, this.opcode);
    this.code.set(RD, this.rd);
    this.code.set(IMM_20, imm >>> 20);
    this.code.set(IMM_10_1, imm >>> 1);
    this.code.set(IMM_19_12, imm >>> 12);
    this.code.set(IMM_11J, imm >>> 11);
  }
}
