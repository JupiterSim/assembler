import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32M mul instruction. */
export class MUL extends RType {
  /**
   * Creates a new RV32M mul instruction.
   *
   * @param rd  - Destination register.
   * @param rs1 - Source register 1.
   * @param rs2 - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'mul', 0x33, rd, 0x0, rs1, rs2, 0x1);
  }
}
