import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32M div instruction. */
export class DIV extends RType {
  /**
   * Creates a new RV32M div instruction.
   *
   * @param rd  - Destination register.
   * @param rs1 - Source register 1.
   * @param rs2 - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'div', 0x33, rd, 0x4, rs1, rs2, 0x1);
  }
}
